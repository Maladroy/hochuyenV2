import type React from "react";
import { useState } from "react";
import type { User } from "@/common/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartDisplay } from "./ChartDisplay";

interface HoroscopeTabProps {
	user: User | null;
}

export const HoroscopeTab: React.FC<HoroscopeTabProps> = ({ user }) => {
	const [formData, setFormData] = useState({
		year: 2000,
		month: 1,
		day: 1,
		hour: 12,
		gender: "Nam",
		viewYear: new Date().getFullYear(),
	});

	const [hasChart, setHasChart] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleAnLaSo = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		// Simulate API call
		setTimeout(() => {
			setHasChart(true);
			setLoading(false);
		}, 1000);
	};

	return (
		<div className="space-y-6">
			{/* Input Form */}
			<Card>
				<CardHeader>
					<CardTitle>Thông Tin Sinh</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleAnLaSo} className="space-y-4">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div className="space-y-2">
								<Label htmlFor="year">Năm Sinh (DL)</Label>
								<Input
									type="number"
									value={formData.year}
									onChange={(e) =>
										setFormData({ ...formData, year: +e.target.value })
									}
									min={1900}
									max={2100}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="month">Tháng Sinh</Label>
								<Input
									type="number"
									value={formData.month}
									onChange={(e) =>
										setFormData({ ...formData, month: +e.target.value })
									}
									min={1}
									max={12}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="day">Ngày Sinh</Label>
								<Input
									type="number"
									value={formData.day}
									onChange={(e) =>
										setFormData({ ...formData, day: +e.target.value })
									}
									min={1}
									max={31}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="hour">Giờ Sinh (0-23h)</Label>
								<Input
									type="number"
									value={formData.hour}
									onChange={(e) =>
										setFormData({ ...formData, hour: +e.target.value })
									}
									min={0}
									max={23}
									required
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label>Giới Tính</Label>
								<Select
									value={formData.gender}
									onValueChange={(val) =>
										setFormData({ ...formData, gender: val })
									}
								>
									<SelectTrigger>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Nam">Nam</SelectItem>
										<SelectItem value="Nữ">Nữ</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label>Năm Xem (DL)</Label>
								<Input
									type="number"
									value={formData.viewYear}
									onChange={(e) =>
										setFormData({ ...formData, viewYear: +e.target.value })
									}
								/>
							</div>
						</div>

						<Button
							type="submit"
							className="w-full bg-indigo-600 hover:bg-indigo-700"
							disabled={loading}
						>
							{loading ? "Đang tính toán..." : "An Lá Số Tự Động"}
						</Button>
					</form>
				</CardContent>
			</Card>

			{/* Saved Charts Manager Button */}
			{user && (
				<Card>
					<CardContent className="pt-6">
						<Button
							variant="outline"
							className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50"
						>
							📋 Quản Lý Lá Số Đã Lưu
						</Button>
					</CardContent>
				</Card>
			)}

			{/* Results Section */}
			{hasChart && (
				<div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
					<Tabs defaultValue="chart">
						<div className="mb-4 overflow-x-auto">
							<TabsList>
								<TabsTrigger value="chart">Lá Số</TabsTrigger>
								<TabsTrigger value="interpretation">Luận Giải</TabsTrigger>
								<TabsTrigger value="vanhan">Vận Hạn</TabsTrigger>
							</TabsList>
						</div>

						<TabsContent value="chart">
							<ChartDisplay data={formData} />
						</TabsContent>

						<TabsContent value="interpretation">
							<Card>
								<CardHeader>
									<CardTitle>Kết Quả Luận Giải</CardTitle>
								</CardHeader>
								<CardContent>
									<Label>Chọn cung:</Label>
									<Select defaultValue="ALL">
										<SelectTrigger className="w-[200px] mt-2">
											<SelectValue placeholder="Tất cả" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="ALL">Tất cả</SelectItem>
											<SelectItem value="Mệnh">Mệnh</SelectItem>
											<SelectItem value="Thân">Thân</SelectItem>
										</SelectContent>
									</Select>
									<div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-600 min-h-[200px]">
										Nội dung luận giải sẽ hiển thị ở đây...
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="vanhan">
							<Card>
								<CardHeader>
									<CardTitle>Luận Giải Vận Hạn</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex gap-4 mb-4 items-end">
										<div className="space-y-2 flex-1">
											<Label>Năm Xem Vận Hạn</Label>
											<Input
												type="number"
												defaultValue={new Date().getFullYear()}
											/>
										</div>
										<Button>Phân Tích</Button>
									</div>
									<div className="p-4 bg-gray-50 rounded-lg text-gray-600 min-h-[200px]">
										Kết quả vận hạn...
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			)}
		</div>
	);
};
