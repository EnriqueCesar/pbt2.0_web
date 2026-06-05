window.PBT_COLS=["Q","Category","DayPart","Mes","Semana","Tienda","Weekpart","TipoOrden","Venta"];

window.PBT_DICTS=[
  ["Q1_26","Q2_26","Q4_25"],
  ["CBS","Café filtrado","Espresso","Food","Otro"],
  ["Afternoon","Lunch","Morning"],
  ["Abr","Dic","Ene","Feb"],
  ["01","02","03","04","05","06","07","08","14","15","16","17","48","49","50","51","52"],
  ["Nombre Tienda 1","Nombre Tienda 2"],
  ["Weekday","Weekend"],
  ["Drive Thru","Lobby","Pick up & Delivery"]
];

window.PBT_ROWS=[
  [1,2,2,0,8,0,0,1,1250.55],
  [1,3,2,0,8,0,0,2,450.20]
];

window.PBT_DT_STORE_IDS=[0];

window.PBT={
  cols:window.PBT_COLS,
  dicts:window.PBT_DICTS,
  rows:window.PBT_ROWS,
  dtStoreIds:new Set(window.PBT_DT_STORE_IDS),
  val(r,c){
    const i=this.cols.indexOf(c);
    return i===8 ? r[8] : this.dicts[i][r[i]];
  },
  hasDTStoreName(n){
    const i=this.dicts[5].indexOf(n);
    return i>=0 && this.dtStoreIds.has(i);
  },
  toObjects(){
    return this.rows.map(r=>({
      Q:this.dicts[0][r[0]],
      Category:this.dicts[1][r[1]],
      DayPart:this.dicts[2][r[2]],
      Mes:this.dicts[3][r[3]],
      Semana:this.dicts[4][r[4]],
      Tienda:this.dicts[5][r[5]],
      Weekpart:this.dicts[6][r[6]],
      TipoOrden:this.dicts[7][r[7]],
      Venta:r[8]
    }));
  }
};
