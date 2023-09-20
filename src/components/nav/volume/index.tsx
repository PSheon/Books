// ** React Imports
import { Fragment } from "react";

interface Props {
  title: string;
}

function Volume(props: Props) {
  // ** Props
  const { title } = props;

  return <Fragment>{title}</Fragment>;
}

export default Volume;
