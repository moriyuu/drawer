import { useState } from "react";
import styled from "styled-components";
import { Drawer } from "../components/drawer";

interface ContainerProps {
  isOpen: boolean;
  handleClickOpner: (nextState: boolean) => void;
}

interface Props extends ContainerProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => (
  <div>
    <button
      onClick={() => {
        props.handleClickOpner(!props.isOpen);
      }}
    >
      {props.isOpen ? "close" : "open"}
    </button>
    <Drawer isOpen={props.isOpen} handleClickOpner={props.handleClickOpner}>
      {new Array(4).fill(0).map((_, i) => {
        return (
          <div
            onClick={() => {
              alert("clicked!");
            }}
          >
            Link{i + 1}
          </div>
        );
      })}
    </Drawer>
  </div>
);

const StyledComponent = styled(Component)``;

const ContainerComponent: React.FC<ContainerProps> = (props) => {
  const [isOpen, setOpener] = useState(false);
  const handleClickOpner = (nextState: boolean) => {
    setOpener(nextState);
  };
  const containerProps = { isOpen, handleClickOpner };
  return (
    <StyledComponent {...containerProps}>{props.children}</StyledComponent>
  );
};

export default ContainerComponent;
