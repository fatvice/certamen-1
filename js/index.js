tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

let select = document.querySelector("#ciudad-select");
let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
let option4 = document.createElement("option");

option1.innerText = 'Viña del Mar';
option2.innerText = 'Quilpué';
option3.innerText = 'Santiago';
option4.innerText = 'Otro';

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);

const reos = [];
const cargarTabla = () => {
    let tbody = document.querySelector("#tbody-tabla")
    tbody.innerHTML = "";
    for(let i = 0; i < reos.length; ++i){
        let r = reos[i];
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdDetalle = document.createElement("td");
        let tdCiudad = document.createElement("td");
        let tdGravedad = document.createElement("td");

        tdNombre.innerText = r.nombre + ' ' + r.apellido;
        tdDetalle.innerHTML = r.descripcion;
        tdCiudad.innerText = r.ciudad;
        
        let cantidad = document.createElement("tulio");
        if (r.cantidad <= 3){
            cantidad.classList.add("fas","fa-horse","text-primary","fa-3x");
        }
        if ((r.cantidad >= 4)&&(r.cantidad <= 6)){
            cantidad.classList.add("fas","fa-skull","text-warning","fa-3x");
        }
        if ((r.cantidad >= 7)&&(r.cantidad <= 15)){
            cantidad.classList.add("fas","fa-hamburger","text-success","fa-3x");
        }
        if (r.cantidad > 15){
            cantidad.classList.add("fas","fa-utensils","text-info","fa-3x");
        }
        tdGravedad.classList.add("text-center");
        tdGravedad.appendChild(cantidad);

        tr.appendChild(tdNombre);
        tr.appendChild(tdDetalle);
        tr.appendChild(tdCiudad);
        tr.appendChild(tdGravedad);
        tbody.appendChild(tr);
    }
}

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let cantidad = document.querySelector("#cantidad-number").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    let ciudad = document.querySelector("#ciudad-select").value;
    
    let reo = {};
    reo.nombre = nombre;
    reo.apellido = apellido;
    reo.cantidad = cantidad;
    reo.descripcion = descripcion;
    reo.ciudad = ciudad;

    reos.push(reo);
    cargarTabla();
    Swal.fire("Registro de criminal realizado",":)","info")
});
