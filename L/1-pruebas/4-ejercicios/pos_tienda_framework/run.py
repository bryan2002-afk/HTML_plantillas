from app import app, db
from app.models import *

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
