import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'rounded-lg px-5  font-medium flex items-center justify-center gap-2', // tudo que for igual estará aqui
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-700',
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  }, // tudo que não for igual estará na variants


  defaultVariants: {
    variant: 'primary', // em caso de nn for passado nenhuma cor ele setará a primaria
    size: 'default',
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
  children: ReactNode // irá receber qualquer tipo de valores (string, icon, number e outros)
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      { children }
    </button>
  )
}

// ...props - qualquer propriedade passada no botão vai ser repassado não sendo obrigatório