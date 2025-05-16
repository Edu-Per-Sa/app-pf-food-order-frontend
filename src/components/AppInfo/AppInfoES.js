export const appInfoES = [
    {
        title: "INFORMACION DE LA APP",
        paragrahs: [],
    },
    {
        title: "RESUMEN",
        paragrahs: [
            "Aplicacion que se crea para visualizar menu do comidas y un carrito de compra.",
            "Se puede añadir elementos desde un listado de comidas.",
            "Tambíen modificar las cantidades con botones dentro del mismo carrito.",
            "Posteriormente se puede ir a un formulario de datos para completar la compra.",
        ]
    },
    {
        title: "ALMACENAMIENTO",
        paragrahs: [
            "Se implemento un fetch con el cual se extrae desde firebase el listado de comidas.",
            "Una vez agregados las comidas en el carrito se almacenan en localStore del computador.",
            "Así el usuario pueda tener su propio resguardo y recuperar lo que tenia en caso de cerrar la ventana.",
            "Al completar la orden se muestra el mensaje de satisfactorio y se envia la peticion a firebase.",
            "No se acumulan las ordenes puestas por motivos de espacio en la base de datos",
        ]
    }
]