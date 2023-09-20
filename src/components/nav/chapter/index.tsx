// ** React Imports
import { Fragment } from "react";

interface Props {
  title: string;
}

function Chapter(props: Props) {
  // ** Props
  const { title } = props;

  return <Fragment>{`📖 ${title}`}</Fragment>;
}

export default Chapter;
