"use client"

import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import React from "react"
import {
	CheckboxFiltersGroup,
	FilterCheckbox,
	RangeSlider,
	Title,
} from "../shared"
import { Input } from "../ui"

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()

	const items = ingredients.map((item) => ({
		value: String(item.id),
		text: item.name,
	}))

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold"></Title>

			{/* Верхние чекбоксы */}
			<div className="flex flex-col gap-4 ">
				<FilterCheckbox name="t" text="Можно собирать" value="1" />
				<FilterCheckbox name="t" text="Новинки" value="2" />
			</div>

			{/* Верхние цен */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до</p>
				<div className="flex gap-3 mb-3">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input type="number" placeholder="1000" min={100} max={1000} />
				</div>

				<RangeSlider min={0} max={1000} step={10} value={[0, 400]} />

				<CheckboxFiltersGroup
					title="Ингредиенты"
					className="mt-[70px]"
					limit={6}
					defaultItems={items.slice(0, 6)}
					items={items}
					loading={loading}
					onClickCheckbox={onAddId}
					selectedIds={selectedIds}
					name="Ingredients"
				/>
			</div>
		</div>
	)
}
