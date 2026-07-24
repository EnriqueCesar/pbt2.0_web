# pbt2.0_web

## V15 - Auditoría integral PBT 2.0
- Ajuste de markers: Fijo = verde, No fijo = blanco con borde verde.
- Se eliminó override manual por letra para que respete la columna **Fijo** de rutinas.
- Coordenadas tomadas directamente de `EXCEL_DATA.coords` con layout Café / DT.
- Service Worker actualizado para limpiar caché anterior en GitHub Pages.
- Validación completa: 32,368 rutinas y 60,950 coordenadas sin valores inválidos.
- Leyenda accesible y atribución discreta agregadas.
- El fallback ya no deduce Fijo/No fijo por el punto de la letra; usa la fuente real o muestra estado sin dato.
