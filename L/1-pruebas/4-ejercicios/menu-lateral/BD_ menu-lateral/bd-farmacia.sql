-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.32-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para bd-farmacia
CREATE DATABASE IF NOT EXISTS `bd-farmacia` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bd-farmacia`;

-- Volcando estructura para tabla bd-farmacia.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_categoria`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd-farmacia.categorias: ~10 rows (aproximadamente)
INSERT INTO `categorias` (`id_categoria`, `nombre`, `fecha_creacion`) VALUES
	(23, 'Medicamentos', '2025-05-28 11:37:41'),
	(24, 'Suplementos', '2025-05-28 11:37:41'),
	(25, 'Material de curación', '2025-05-28 11:37:41'),
	(26, 'Higiene personal', '2025-05-28 11:37:41'),
	(27, 'Equipo médico', '2025-05-28 11:37:41'),
	(28, 'Cosméticos', '2025-05-28 11:37:53'),
	(29, 'Cuidado infantil', '2025-05-28 11:37:53'),
	(30, 'Productos naturales', '2025-05-28 11:37:53'),
	(31, 'Veterinaria', '2025-05-28 11:37:53'),
	(32, 'Desinfectantes', '2025-05-28 11:37:53');

-- Volcando estructura para tabla bd-farmacia.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido1` varchar(100) DEFAULT NULL,
  `apellido2` varchar(100) DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd-farmacia.clientes: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bd-farmacia.empleados
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido1` varchar(100) DEFAULT NULL,
  `apellido2` varchar(100) DEFAULT NULL,
  `puesto` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_empleado`),
  UNIQUE KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd-farmacia.empleados: ~1 rows (aproximadamente)
INSERT INTO `empleados` (`id_empleado`, `id_usuario`, `nombre`, `apellido1`, `apellido2`, `puesto`, `telefono`, `fecha_creacion`) VALUES
	(1, 1, 'Bryan Julian', 'Suriano', 'Ramírez', 'Administrardor POS', '9512309564', '2025-05-28 11:28:21');

-- Volcando estructura para tabla bd-farmacia.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` int(50) DEFAULT NULL,
  `stock` int(20) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_producto`) USING BTREE,
  KEY `id_categoria` (`id_categoria`) USING BTREE,
  KEY `id_proveedor` (`id_proveedor`) USING BTREE,
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd-farmacia.productos: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bd-farmacia.proveedores
CREATE TABLE IF NOT EXISTS `proveedores` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_proveedor`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd-farmacia.proveedores: ~10 rows (aproximadamente)
INSERT INTO `proveedores` (`id_proveedor`, `nombre`, `telefono`, `correo`, `direccion`, `fecha_creacion`) VALUES
	(7, 'Farmacéutica del Sur', '9991234567', 'contacto@farmasur.com', 'Av. Reforma #120, Mérida, Yucatán', '2025-05-28 11:39:08'),
	(8, 'Distribuidora Médica Yucatán', '9992345678', 'ventas@dismed.com.mx', 'Calle 45 #232, Col. Centro, Mérida', '2025-05-28 11:39:08'),
	(9, 'Laboratorios Genéricos MX', '5556781234', 'info@genericosmx.com', 'Calle Hidalgo 15, CDMX', '2025-05-28 11:39:08'),
	(10, 'Suministros Hospitalarios del Sureste', '9813456789', 'soporte@suhos.com', 'Blvd. Hospital #88, Campeche', '2025-05-28 11:39:08'),
	(11, 'Salud Natural Integral', '3312345678', 'ventas@saludnatural.com', 'Av. Vallarta 320, Guadalajara, Jalisco', '2025-05-28 11:39:08'),
	(12, 'Medical Express', '8123456789', 'medexp@correo.com', 'Calle Monterrey 19, Monterrey, NL', '2025-05-28 11:39:08'),
	(13, 'Grupo FarmaPlus', '5551122334', 'contacto@farmaplus.mx', 'Insurgentes Sur 500, CDMX', '2025-05-28 11:39:08'),
	(14, 'Distribuidora La Salud', '7441234567', 'info@lasalud.com', 'Av. Universidad 200, Acapulco, Guerrero', '2025-05-28 11:39:08'),
	(15, 'Equipo Médico Profesional', '2225678901', 'ventas@equipomedico.com', 'Calle 10 Poniente #14, Puebla', '2025-05-28 11:39:08'),
	(16, 'BioSalud Proveedores', '4429876543', 'contacto@biosalud.com', 'Blvd. Bernardo Quintana 1400, Querétaro', '2025-05-28 11:39:08');

-- Volcando estructura para tabla bd-farmacia.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `nivel_acceso` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd-farmacia.roles: ~5 rows (aproximadamente)
INSERT INTO `roles` (`id_rol`, `nombre`, `descripcion`, `nivel_acceso`, `estado`, `fecha_creacion`) VALUES
	(1, 'Administrador', 'Acceso total al sistema, gestión de usuarios y configuración.', 5, 1, '2025-05-28 10:51:26'),
	(2, 'Supervisor', 'Supervisa operaciones y tiene acceso a reportes y gestión parcial.', 4, 1, '2025-05-28 10:51:26'),
	(3, 'Vendedor', 'Puede registrar ventas, ver productos y atender clientes.', 3, 1, '2025-05-28 10:51:26'),
	(4, 'Cajero', 'Realiza ventas pero con permisos limitados.', 2, 1, '2025-05-28 10:51:26'),
	(5, 'Invitado', 'Acceso limitado solo para visualización básica.', 1, 1, '2025-05-28 10:51:26');

-- Volcando estructura para tabla bd-farmacia.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(100) NOT NULL,
  `gmail` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  KEY `id_rol` (`id_rol`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd-farmacia.usuarios: ~1 rows (aproximadamente)
INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `gmail`, `contraseña`, `id_rol`, `fecha_creacion`) VALUES
	(1, 'administrador01', 'admin@gmail.com', '2002', 1, '2025-05-28 11:24:42');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
