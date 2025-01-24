import { LaravelIcon } from '@/app/_components/icons/LaravelIcon';

export const Logo = (props: { size ?: number }) => {
  return (
    // Version pour test
    <div
      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    >
      <LaravelIcon size={props.size || 50} />
    </div>
    // Version pour déploiement
    /* <Image
      ref={logoRef}
      src={props.src || "/logo.svg"}
      alt={props.src || "/logo.svg"}
      className='absolute top-1/2 transform -translate-y-1/2 ${props.size || "w-16" }'
    /> */
  );
};

export default Logo;