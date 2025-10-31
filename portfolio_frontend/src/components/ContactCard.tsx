export type Contact = {
  email: string;
  phone?: string;
  location?: string;
};

/**
 * PUBLIC_INTERFACE
 * ContactCard renders email (mailto) and optional phone/location.
 */
export default function ContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-3">Get in touch</h3>
      <ul className="space-y-2 text-[15px]">
        <li>
          <a className="btn btn-secondary" href={`mailto:${contact.email}`}>
            ✉ Email: {contact.email}
          </a>
        </li>
        {contact.phone ? (
          <li className="text-muted">📞 Phone: {contact.phone}</li>
        ) : null}
        {contact.location ? (
          <li className="text-muted">📍 Location: {contact.location}</li>
        ) : null}
      </ul>
    </div>
  );
}
