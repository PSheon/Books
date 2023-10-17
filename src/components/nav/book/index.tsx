interface Props {
  title: string;
}

function Book(props: Props) {
  // ** Props
  const { title } = props;

  // ** Variables
  const enhancedTitle = title.replace(new RegExp(/(『|』)/, "g"), "");

  return (
    <span>
      <span style={{ paddingRight: "12px" }}>📙</span>
      <span>{enhancedTitle}</span>
    </span>
  );
}

export default Book;
