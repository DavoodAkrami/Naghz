import styles from "./Button.module.css" 
import clsx from "clsx"

const Button = ({size = 'large', variant, children, className, onClick, active}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                styles.root,
                //sizes
                size === 'small' && styles.sizeSmall,
                size === 'medium' && styles.sizeMedium,
                size === 'large' && styles.sizeLarge,
                //Variants
                variant === 'outline' && styles.variantOutline,
                variant === 'fill' && styles.variantFill,

                active === true && styles.active,

                className 
            )}
        >
            {children}
        </button>
    )
}

export default Button;