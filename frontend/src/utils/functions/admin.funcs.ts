export const handleImageBase64 = (event: any, setImageBase64: (imageBase64: string) => void) => {
  try {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      // Configurar el evento de carga del lector
      reader.onload = function (e) {
        if (e.target && e.target.result) {
          const base64Image = e.target.result as string;

          // Actualizar el estado con el Base64 de la imagen
          setImageBase64(base64Image);
        }
      };

      // Leer el archivo como Base64
      reader.readAsDataURL(file);
    } else {
      console.log("No se ha seleccionado un archivo");
    }
  } catch (error) {
    console.log("Ha ocurrido un error");
  }
}
