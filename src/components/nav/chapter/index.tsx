interface Props {
  title: string;
}

function Chapter(props: Props) {
  // ** Props
  const { title } = props;

  return <span>{`📖 ${title}`}</span>;
}

export default Chapter;
