export default function Typography({ as:Element, size = 'base', className, children, ...rest}) {
    var level;
    switch(size) {
        case 'super':
            level = 'font-sans text-6xl lg:text-8xl leading-none tracking-tight font-semibold'
            break;
        case 'xlarge':
            level = 'font-sans font-semibold text-3xl lg:text-5xl leading-none tracking-tight'
            break;
        case 'large':
            level = 'font-sans text-lg lg:text-2xl lg:leading-normal font-medium'
            break;
        case 'base':
            level = 'font-sans text-lg lg:text-xl lg:leading-normal font-medium'
            break;
        case 'small': 
            level= 'font-sans text-lg lg:text-base font-semibold leading-10'
            break;
        case 'xsmall': 
            level= 'font-sans font-semibold text-xs tracking-wide uppercase'
            break;
        default: 
            level = 'font-sans text-lg lg:text-base font-semibold leading-10'
    }

    return (
        <Element className={`${level} ${className}`} {...rest}>{children}</Element>
    )
}