# pbt2.0_web

## V18 - Experiencia operativa y auditoría Python reproducible
- Se conserva íntegro el motor V17: coordenadas, plays, rutinas, filtros, Product Mix y cálculos no fueron reescritos.
- Nueva guía visual de tres pasos, jerarquía más clara, estados de carga y navegación accesible sin alterar el layout original.
- `data/project.json` centraliza **JUNTÉMONOS MÁS**, colores, propósito y pie de página operativo.
- `js/app.js` agrega caché LRU para consultas repetidas del motor y reduce recálculos durante la operación.
- El Service Worker instala primero la interfaz y almacena los archivos pesados del motor cuando se solicitan, acelerando la activación PWA.
- `scripts/audit_originals.py` valida de forma reproducible los tres Excel originales y genera `reports/audit-originals.json`.

### Resultado de auditoría
- 60,950 coordenadas: sin faltantes ni diferencias.
- 32,368 rutinas: sin faltantes ni diferencias.
- 459,256 claves de play: sin faltantes ni diferencias.
- 32,804 combinaciones de mix: sin faltantes ni diferencias.
- 714,212 filas de venta consolidadas en 67,079 grupos: sin grupos faltantes, extra o distintos; tolerancia de redondeo máxima de 0.01.
- 534 referencias únicas de la guía de fórmulas: todas dentro de las dimensiones del motor original.
- Transformación visual conservada: fila `+17`, columna `+1`, inicio `B18`, anchos `B:N = 9.08203125` y `O = 10.83203125`.

```bash
python scripts/audit_originals.py \
  --formula "Base PBT_Formula.xlsx" \
  --sales "Base_Order_MixProducto_Enero_Febrero_Abril.xlsx" \
  --pbt "PBT.24Desbloqueado.xlsx"
```

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
