export default function Section({
  id,
  title,
  subtitle,
  children,
  variant,
}) {

  return (
    <section
      id={id}
      className={
        variant
          ? `section section--${variant}`
          : "section"
      }
    >

      <div className="container">

        {(title || subtitle) && (

          <div className="section__header">

            {subtitle && (
              <p className="section__subtitle">
                {subtitle}
              </p>
            )}

            {title && (
              <h2 className="section__title">
                {title}
              </h2>
            )}

            <div className="section__line"></div>

          </div>

        )}

        {children}

      </div>

    </section>
  );
}