-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-06-2016 a las 23:59:45
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `facturacion_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `numero_factura` int(11) NOT NULL,
  `fecha_solicitado` date NOT NULL,
  `monto` decimal(12,2) NOT NULL DEFAULT '0.00',
  `impuesto` decimal(12,2) NOT NULL DEFAULT '0.00',
  `monto_neto` decimal(12,2) NOT NULL,
  `estado` varchar(15) NOT NULL,
  `comentario` text,
  `cliente_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas_detalle`
--

CREATE TABLE `facturas_detalle` (
  `numero_factura` int(11) NOT NULL,
  `producto_id` varchar(15) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto_id` int(15) NOT NULL,
  `producto` varchar(70) NOT NULL,
  `precio_compra` decimal(10,2) NOT NULL,
  `precio_venta` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_id`, `producto`, `precio_compra`, `precio_venta`) VALUES
(1, 'TAJO DE RES', '50.00', '80.00'),
(2, 'BISTEC DE RES', '40.00', '70.00'),
(3, 'COSTILLA DE RES', '40.00', '70.00'),
(4, 'COLA DE RES', '30.00', '50.00'),
(5, 'CARNE MOLIDA', '30.00', '60.00'),
(6, 'CARNE PARA ASAR', '30.00', '40.00'),
(7, 'CHULETA DE RES', '40.00', '60.00'),
(8, 'LECHE NATURAL DE VACA', '10.00', '20.00'),
(9, 'LECHE DESLACTOSADA FLUIDA', '25.00', '30.00'),
(10, 'NATILLA', '5.00', '10.00'),
(11, 'QUESO NORMAL BLANCO', '10.00', '14.00'),
(12, 'HUEVO DE GALLINA', '20.00', '34.00'),
(13, 'PAPAS', '1.00', '3.00'),
(14, 'AJOS', '1.00', '2.00'),
(15, 'BROCOLI', '2.00', '5.00'),
(16, 'ZANAHORIAS', '1.00', '3.00'),
(17, 'PEPINOS', '1.00', '4.00'),
(18, 'REMOLACHAS', '3.00', '5.00'),
(19, 'CHILE DULCE', '1.00', '3.00'),
(20, 'YUCA', '2.00', '4.00'),
(21, 'CAMOTE', '2.00', '3.00'),
(22, 'COCOS SECOS', '3.00', '5.00'),
(23, 'COCO RALLADO', '4.00', '6.00'),
(24, 'PLATANO VERDE', '1.00', '2.00'),
(25, 'PLATANO MADURO', '1.00', '2.00'),
(26, 'MANGO VERDE', '1.00', '2.00'),
(27, 'MANGO MADURO', '1.00', '2.00'),
(28, 'GUAYABA', '1.00', '3.00'),
(29, 'NANCE', '1.00', '4.00'),
(30, 'PIMIENTA MOLIDA', '1.00', '2.00'),
(31, 'FRIJOL NEGRO', '1.34', '2.50'),
(32, 'TRIGO', '1.10', '2.20'),
(33, 'MAIZ BLANCO', '1.50', '2.50'),
(34, 'MANTECA DE CERDO', '1.20', '2.00'),
(35, 'CHORIZO CRIOLLO', '5.50', '6.50'),
(36, 'AZUCAR', '1.50', '3.50'),
(37, 'JUGO DE NARANJA', '2.30', '5.00'),
(38, 'CHICHARRONES DE CERDO', '4.20', '6.30'),
(39, 'JUGO DE TORONJA', '2.00', '5.00'),
(40, 'BISCOCHOS', '2.00', '3.00'),
(41, 'QUESADILLAS', '3.00', '5.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`numero_factura`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `numero_factura` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `producto_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
