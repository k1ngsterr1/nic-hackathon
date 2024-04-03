import { DevilFruit } from "@/entities/DevilFruit"

const TypesOfDevilFruit = () => {
  return (
    <section className="container flex flex-col items-center justify-center">
      <h1 className="text-center mb-10 text-2xl font-semibold text-orange">Types of Devil Fruit</h1>
      <p className="w-[60%] text-center text-base font-medium mb-20">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
      <DevilFruit />
    </section>
  )
}

export default TypesOfDevilFruit