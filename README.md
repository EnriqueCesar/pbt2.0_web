# pbt2.0_web

## V17 - Auditoría integral de coordenadas
- Se comprobaron las 60,950 claves contra `PBT.24Desbloqueado.xlsx` sin faltantes ni diferencias.
- El bloque G–E–F se conserva en D19:E19:F19 porque esa es la ubicación efectiva del original.
- La escala horizontal ahora respeta los anchos originales: B:N = 9.08203125 y O = 10.83203125.
- Se conservaron fórmulas, filtros, plays, rutinas, Fijo/No fijo, fotografías, almacenamiento local y PWA.

## V16 - Equipo y visual informativo
- La condición **Fijo / No fijo** permanece activa para los marcadores, pero se oculta como leyenda y columna visible.
- En **Equipo**, tocar la fotografía permite adjuntar o cambiar la imagen.
- Se agregó una acción independiente **Cámara** para capturar la foto directamente en dispositivos compatibles.
- Las fotografías continúan guardándose localmente y no modifican coordenadas, filtros ni rutinas.

## V15 - Auditoría integral PBT 2.0
- Ajuste de markers: Fijo = verde, No fijo = blanco con borde verde.
- Se eliminó override manual por letra para que respete la columna **Fijo** de rutinas.
- Coordenadas tomadas directamente de `EXCEL_DATA.coords` con layout Café / DT.
- Service Worker actualizado para limpiar caché anterior en GitHub Pages.
- Validación completa: 32,368 rutinas y 60,950 coordenadas sin valores inválidos.
- Leyenda accesible y atribución discreta agregadas.
- El fallback ya no deduce Fijo/No fijo por el punto de la letra; usa la fuente real o muestra estado sin dato.
