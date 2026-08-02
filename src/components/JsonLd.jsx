/**
 * JsonLd Component (Server)
 * --------------------------
 * Renders a schema.org graph as a JSON-LD script tag.
 *
 * `<` is escaped so a value containing "</script>" can never break out of the
 * tag — the data is static today, but this keeps it safe if it ever isn't.
 */

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
