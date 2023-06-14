export default function forgotPassTemplate({
    name,
    websiteName,
    URLToReset,
    userId,
    token,
}) {
    const firstName = name.split(" ")[0];
    const css = styles => styles;
    const containerStyles = css`
        max-width: 430px;
        padding: 30px 15px;
        margin: 0 auto;
        text-align: left;
        font-size: 16px;
        line-height: 1.5;
        color: rgb(86, 90, 92);
    `;
    const btnStyles = css`
        width: 100%;
        min-width: 80px;
        display: block;
        padding: 12px 20px;
        margin-bottom: 20px;
        text-align: center;
        white-space: nowrap;
        text-decoration: none;
        border-radius: 5px;
        background-color: rgb(71, 162, 234);
        color: #fff;
    `;
    const footerStyles = css`
        font-size: 12px;
        color: rgb(171, 173, 174);
        text-align: center;
    `;

    return /*html*/ `
        <div style="${containerStyles}">
            <div style="margin-bottom: 30px">
                <img style="height: 30px"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/Otjcwa2eCOF.png" alt="Logo do Instagram" />
            </div>

            <div style="margin-bottom: 30px">
                <p style="margin-bottom: 10px">
                    Olá, ${firstName}.
                </p>

                <p style="margin-bottom: 20px">
                    Você nos informou que esqueceu sua senha através do nosso site<b style="color: #000">${
                        websiteName ? ` ${websiteName}` : ""
                    }</b>. Clique no botão abaixo para redefini-la.
                </p>

                <a 
                    style="${btnStyles}"
                    href="${URLToReset}?user=${userId}&token=${token}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Redefinir minha senha
                </a>

                <p>
                    Se você não solicitou a redefinição de sua senha, ignore essa mensagem. Somente as pessoas que sabem sua senha ou possuem acesso a este e-mail podem fazer login na sua conta.
                </p>
            </div>

            <div style="${footerStyles}">
                ${
                    websiteName
                        ? /*html*/ `
                    <b style="display: block;">
                        ${websiteName}
                    </b>
                `
                        : ""
                }

                <p style="margin: 4px 0 0 0">
                    Por Leonardo Henrique.
                </p>
            </div>
        </div>
    `;
}
