interface Props {
  title: string;
}

function Simple(props: Props) {
  // ** Props
  const { title } = props;

  return <span>{title}</span>;
}

export default Simple;
