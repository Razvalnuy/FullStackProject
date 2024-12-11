import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from "@/components/shared"

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />

			<Container className="pb-14 mt-10">
				<div className="flex gap-[80px]">
					{/* //todo Filters */}
					<div className="w-[250px]">
						<Filters />
					</div>

					{/* //todo Товары */}
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								categoryId={1}
								title="Пиццы"
								items={[
									{
										id: 0,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
									{
										id: 1,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
									{
										id: 2,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
									{
										id: 3,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
								]}
							/>
							<ProductsGroupList
								categoryId={2}
								title="Комбо"
								items={[
									{
										id: 0,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
									{
										id: 1,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
									{
										id: 2,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
									{
										id: 3,
										name: "Чизбургер пицца",
										items: [{ price: 250 }],
										imageUrl:
											"https://media.dodostatic.net/image/r:292x292/11EF620C4FFE97539ED4F34C6D633459.avif",
									},
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
