//¿Qué tareas se consideran macrotareas y cuáles son microtareas?
//Las macrotareas en este ejercicio serian el SetTimeOut() y las microtareas serian las Promesas

//¿Cómo se relacionan las macrotareas y microtareas con el event loop?
//Las macrotareas y microtareas se relacionan en el Event Loop en varias caracteristicas. Una de ellas es que ambas son enviadas primero a una Fila donde tienen que esperar a que ciertas condiciones se cumplan primero que ellas, otra caracteristicas es que ambas tienen que pasar por el callstack para despues ser ejecutadas


//¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
//Cuando una Microtarea genera una nueva Macrotarea, Todas las Microtareas son ejecutadas primero y luego todas las Macrotareas son ejecutadas despues.

//¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
// Las promesas son ejecutadas primero al ser microtareas y luego los setTimeOut al ser macrotareas.