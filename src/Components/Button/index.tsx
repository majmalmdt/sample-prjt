type ButtonType = 'Primary' | 'Secondary' | 'Inline' | 'login';

interface PropsTypes {
  label: String;
  type?: ButtonType;
  onClick?: () => void;
  action?: 'submit' | 'button';
  disabled?: boolean;
  loading?: boolean;
}

const getClassName = (type:ButtonType)=> {
  const classNamesList = {
    Primary: "primary-button",
    Secondary: "secondary-button",
    Inline: "inline-button",
    login:"bg-violet-950 rounded-md text-white py-2 px-10 w-full"
  }
  return classNamesList[type] || "";
}

const Button = ({
  label,
  type = 'login',
  onClick,
  action = 'button',
  disabled = false,
  loading = false,
}: PropsTypes) => {
 
  return (
    <button 
      className={getClassName(type)}
      onClick={() => !loading && onClick?.()}
      type={action}
      disabled={loading || disabled} 
    >
      {label}
    </button>
  );
};

export default Button;
