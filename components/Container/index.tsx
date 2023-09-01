// Types
type ContainerType = {
  children: React.ReactNode
}

// Functional Component
export default function Container({ children }: ContainerType) {
  // Rendering
  return (
    <main className="bg-secondary min-h-[100vh] px-[5%] py-16">{children}</main>
  )
}
