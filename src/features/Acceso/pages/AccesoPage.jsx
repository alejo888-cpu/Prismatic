import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import garden from "../../../assets/image/Hero2.webp";
import "./acceso.css";

export default function AccesoPage() {
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  function chooseMode(next) {
    setRegister(next);
    setVisible(false);
    setMessage("");
  }

  function submit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setVisible(false);
    setMessage(register
      ? "Registro de prueba completado. Podrás crear tu cuenta cuando se habilite el servicio."
      : "Formulario de ingreso validado. El inicio de sesión estará disponible cuando se conecte el servicio.");
  }

  return (
    <section className="account-page" aria-labelledby="account-title">
      <div className="garden-wrap account-layout">
        <div className="account-photo"><img src={garden} alt="Sendero entre hojas tropicales" /></div>
        <div className="account-content">
          <p className="garden-label">Prismatic · Mi cuenta</p>
          <h1 id="account-title">{register ? <>Crea tu <em>cuenta.</em></> : <>Inicia <em>sesión.</em></>}</h1>
          <div className="account-modes" role="group" aria-label="Opciones de acceso">
            <button aria-pressed={!register} onClick={() => chooseMode(false)}>Ingresar</button>
            <button aria-pressed={register} onClick={() => chooseMode(true)}>Registrarme</button>
          </div>
          <p className="account-note">Vista de prueba. Usa datos ficticios. Los campos se validan solo en este dispositivo.</p>
          <form key={String(register)} onSubmit={submit} onChange={() => setMessage("")} autoComplete="off">
            {register && <>
              <label>Nombre completo<input required pattern=".*\S.*" maxLength={100} type="text" /></label>
              <div className="account-pair">
                <label>Celular<input required type="tel" inputMode="numeric" pattern="3[0-9]{9}" maxLength={10} placeholder="3XXXXXXXXX" title="10 dígitos, empezando por 3" /></label>
                <label>Cédula de ciudadanía<input required type="text" inputMode="numeric" pattern="[0-9]+" maxLength={10} placeholder="Sin puntos" title="Solo números, sin puntos" /></label>
              </div>
            </>}
            <label>Correo electrónico<input type="email" required placeholder="nombre@ejemplo.com" /></label>
            <div>
              <label htmlFor="account-password">Contraseña</label>
              <div className="account-password">
                <input id="account-password" type={visible ? "text" : "password"} required minLength={register ? 8 : undefined}
                  aria-describedby={register ? "password-tip" : undefined} autoComplete="off" />
                <button type="button" aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={() => setVisible(!visible)}>
                  {visible ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
              {register && <small id="password-tip">Mínimo 8 caracteres.</small>}
            </div>
            <button className="account-submit" type="submit">{register ? "Probar registro" : "Probar ingreso"} ↗</button>
          </form>
          <p role="status" className="account-status">{message}</p>
          <Link className="garden-link" to="/">Continuar como visitante →</Link>
        </div>
      </div>
    </section>
  );
}
