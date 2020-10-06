import styled from "styled-components";

interface PassedProps {
  isOpen: boolean;
  handleClickOpner: (nextState: boolean) => void;
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => (
  <div
    className={props.className}
    onClick={() => {
      props.handleClickOpner(!props.isOpen);
    }}
  >
    <div
      className="menu"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button
        onClick={() => {
          props.handleClickOpner(!props.isOpen);
        }}
      >
        {props.isOpen ? "close" : "open"}
      </button>
      <div>{props.children}</div>
    </div>
  </div>
);

const StyledComponent = styled(Component)<PassedProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background-color: ${(props) => (props.isOpen ? "rgba(0,0,0,0.3)" : "white")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 0;
  transition: background-color 0.3s, opacity 0.3s;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  & > .menu {
    width: 20%;
    height: 100%;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    background-color: white;
    z-index: 1;
    position: absolute;
    top: 0;
    left: ${(props) => (props.isOpen ? 0 : "-40%")};
    transition: left 0.3s, opacity 0.3s;
  }
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  return <StyledComponent {...props}>{props.children}</StyledComponent>;
};

export const Drawer = ContainerComponent;
