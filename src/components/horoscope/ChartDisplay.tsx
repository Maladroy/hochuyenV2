import { Download, Save } from "lucide-react";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export const ChartDisplay = ({ data }: { data: any }) => {
	const hide2Id = useId();
	const hide3Id = useId();

	return (
		<Card className="p-4 bg-white">
			{/* Toolbar */}
			<div className="flex flex-wrap items-center gap-4 mb-6 p-2 bg-gray-50 rounded-lg border border-gray-100">
				<div className="flex items-center gap-2">
					<span className="text-sm font-semibold">Năm xem:</span>
					<input
						type="number"
						className="w-20 p-1 border rounded text-sm"
						defaultValue={data.viewYear}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id={hide2Id} defaultChecked />
					<label htmlFor={hide2Id} className="text-sm">
						Ẩn sao tầng 2
					</label>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id={hide3Id} defaultChecked />
					<label htmlFor={hide3Id} className="text-sm">
						Ẩn sao tầng 3
					</label>
				</div>
				<div className="flex-1"></div>
				<Button size="sm" variant="outline" className="gap-2">
					<Save className="w-4 h-4" /> Lưu
				</Button>
				<Button size="sm" variant="outline" className="gap-2">
					<Download className="w-4 h-4" /> JPG
				</Button>
			</div>

			{/* Birth Info Summary */}
			<div className="text-center mb-6 text-sm text-gray-600">
				Họ tên: Đương số | {data.gender} | {data.day}/{data.month}/{data.year} -{" "}
				{data.hour}h
			</div>

			{/* The 12-Grid System */}
			{/* Note: This is a CSS Grid implementation of the Tu Vi layout 
          Center is usually merged or empty, surrounding 12 cells form the chart */}
			<div className="grid grid-cols-4 gap-1 aspect-square md:aspect-4/3 bg-gray-200 border border-gray-300 p-1">
				{/* Top Row: Tỵ, Ngọ, Mùi, Thân */}
				<PalaceCell name="Tỵ" />
				<PalaceCell name="Ngọ" />
				<PalaceCell name="Mùi" />
				<PalaceCell name="Thân" />

				{/* Middle Rows: Left and Right Columns */}
				<PalaceCell name="Thìn" />
				<div className="col-span-2 row-span-2 bg-white flex items-center justify-center border border-dashed border-gray-300">
					<div className="text-center p-4">
						<h3 className="font-serif text-xl font-bold text-yellow-600 mb-2">
							THIÊN BÀN
						</h3>
						<p className="text-xs text-gray-500">
							Bản quyền © Học Viện Huyền Học
						</p>
					</div>
				</div>
				<PalaceCell name="Dậu" />

				<PalaceCell name="Mão" />
				{/* Middle Center is spanned above */}
				<PalaceCell name="Tuất" />

				{/* Bottom Row: Dần, Sửu, Tý, Hợi */}
				<PalaceCell name="Dần" />
				<PalaceCell name="Sửu" />
				<PalaceCell name="Tý" />
				<PalaceCell name="Hợi" />
			</div>
		</Card>
	);
};

// Individual Palace Component
const PalaceCell = ({ name }: { name: string }) => (
	<div className="bg-white min-h-30 p-2 relative text-xs flex flex-col justify-between hover:bg-slate-50 transition-colors cursor-pointer border border-gray-100">
		<div className="flex justify-between font-bold text-gray-700">
			<span>{name}</span>
			<span className="text-red-500">Mệnh</span> {/* Example placeholder */}
		</div>
		<div className="space-y-1">
			<div className="font-bold text-purple-700">Tử Vi</div>
			<div className="text-blue-600">Thiên Phủ</div>
			{/* Stars would be mapped here */}
		</div>
		<div className="flex justify-between text-[10px] text-gray-400 mt-2 border-t pt-1">
			<span>Trường Sinh</span>
			<span>12</span>
		</div>
	</div>
);
