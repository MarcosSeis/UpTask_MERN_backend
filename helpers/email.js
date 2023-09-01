import nodemailer from "nodemailer";

export const emailRegistro = async  (datos) => {
    
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    
    //Información del Email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'UpTask - Confirma tu cuenta',
        text: " Comprueba tu cuenta en UpTask",
        html: ` <p>Hola: ${nombre} Comprueba tu cuenta en un UpTask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobar el siguiente enlace:  </p>

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">COMPROBAR CUENTA</a>

        <p>Si tu no creaste esta cuenta puedes ignorar el mensaje</p>

        `
    })
    

}



export const emailOlvidePassword = async  (datos) => {
    
    const { email, nombre, token } = datos;

    // TODO: Mover hacia variables de entorno 

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    
    //Información del Email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'UpTask - Reestablece tu password',
        text: " Comprueba tu cuenta en UpTask",
        html: ` <p>Hola: ${nombre} Reestablece tu password de tu cuenta en un UpTask</p>
        <p>Sigue el siguiente enlace para generar el mismo password: </p>

        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">REESTABLECE PASSWORD</a>

        <p>Si tu no solicitaste este cambio ignora este mensaje</p>

        `
    })
    

}
