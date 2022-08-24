import{ Children, Fragment, useRef,forwardRef } from "react";

 const Input = React.forwardRef((props, ref) => {
    return (   
        <div onClick={props.onClick} className={props.class}>
          {(props.addLabel && props.labelFirst) && <label htmlFor={props.input.id}>{props.label}</label>}
          <input ref={ref}   {...props.input} />
          {props.checkbox && <span></span>}
          {(props.addLabel && props.InputFirst) && <label>{props.label}</label>}
        </div>
      );
  });

  Input.displayName = "Input";



  export default Input