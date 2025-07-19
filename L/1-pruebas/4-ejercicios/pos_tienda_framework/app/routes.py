from flask import render_template, redirect, url_for, request, flash
from app import app, db
from app.models import Producto, Venta

@app.route('/')
def index():
    productos = Producto.query.all()
    return render_template('index.html', productos=productos)

@app.route('/producto/nuevo', methods=['GET', 'POST'])
def agregar_producto():
    if request.method == 'POST':
        nombre = request.form['nombre']
        precio = float(request.form['precio'])
        stock = int(request.form['stock'])

        nuevo = Producto(nombre=nombre, precio=precio, stock=stock)
        db.session.add(nuevo)
        db.session.commit()
        flash('Producto agregado correctamente.')
        return redirect(url_for('index'))

    return render_template('agregar_producto.html')

@app.route('/producto/editar/<int:id>', methods=['GET', 'POST'])
def editar_producto(id):
    producto = Producto.query.get_or_404(id)

    if request.method == 'POST':
        producto.nombre = request.form['nombre']
        producto.precio = float(request.form['precio'])
        producto.stock = int(request.form['stock'])

        db.session.commit()
        flash('Producto actualizado.')
        return redirect(url_for('index'))

    return render_template('editar_producto.html', producto=producto)

@app.route('/producto/eliminar/<int:id>')
def eliminar_producto(id):
    producto = Producto.query.get_or_404(id)
    db.session.delete(producto)
    db.session.commit()
    flash('Producto eliminado.')
    return redirect(url_for('index'))

@app.route('/venta/<int:id>', methods=['GET', 'POST'])
def vender_producto(id):
    producto = Producto.query.get_or_404(id)

    if request.method == 'POST':
        cantidad = int(request.form['cantidad'])

        if cantidad <= 0:
            flash('La cantidad debe ser mayor que cero.')
        elif producto.stock < cantidad:
            flash('Stock insuficiente.')
        else:
            total = cantidad * producto.precio
            venta = Venta(producto_id=producto.id, cantidad=cantidad, total=total)
            producto.stock -= cantidad

            db.session.add(venta)
            db.session.commit()
            flash(f'Venta realizada: ${total:.2f}')

        return redirect(url_for('index'))

    return render_template('ventas.html', producto=producto)

@app.route('/comprar/<int:id>', methods=['POST'])
def comprar_producto(id):
    producto = Producto.query.get_or_404(id)
    cantidad = int(request.form['cantidad'])

    if cantidad > 0:
        producto.stock += cantidad
        db.session.commit()
        flash('Compra registrada.')
    else:
        flash('Cantidad inválida.')

    return redirect(url_for('index'))
