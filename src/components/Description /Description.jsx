import css from "./Description.module.css";
export default function Description() {
  return (
    <div>
      <h1 className={css.title}> Sip Happens Café</h1>
      <p className={css.text}>
        Plaese leave your feedback about our service by selecting onee of the
        options below.
      </p>
    </div>
  );
}
