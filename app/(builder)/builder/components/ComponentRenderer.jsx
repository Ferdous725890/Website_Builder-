export default function ComponentRenderer({ component }) {
  switch (component.type) {
    case "Text":
      return <p style={component.sytle}>{component.content}</p>;
    case "Image":
      return <img src={component.src} alt="dynamic" sytle={component.style} />;
    case "Button":
      return <button style={component.style}>{component.text}</button>;
    default:
      return <div>Unkonwn Component</div>;
  }
}
