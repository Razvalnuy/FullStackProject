"use client"
import { cn } from "@/lib/utils"
import { useCategoryStore } from "@/store/category"
import React, { useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { ProductCard, Title } from "../shared"

interface Props {
	title: string
	items: any[]
	className?: string
	listClassName?: string
	categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	listClassName,
	categoryId,
	className,
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{items.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.items[0].price}
						imageUrl={product.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}
