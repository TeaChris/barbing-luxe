import { MaxWidthWrapper } from './max-width-wrapper'

const Nav = () => {
  return (
    <nav className="w-full h-16 top-0 left-0 sticky inset-x-0">
      <MaxWidthWrapper className="h-full">
        <div className="w-full h-full bg-black text-white"></div>
      </MaxWidthWrapper>
    </nav>
  )
}

export { Nav }
