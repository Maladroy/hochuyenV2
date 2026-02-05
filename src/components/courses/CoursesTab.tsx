import type { User } from "@/common/types";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CoursesTabProps {
	user: User | null;
}

export const CoursesTab: React.FC<CoursesTabProps> = ({ user }) => {
	return (
		<div className="space-y-6">
			<Tabs defaultValue="basic" className="w-full">
				<div className="flex justify-center mb-6">
					<TabsList>
						<TabsTrigger value="basic">Khóa học cơ bản</TabsTrigger>
						<TabsTrigger value="advanced">Khóa học nâng cao</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="basic">
					<CoursePanel
						title="Khóa học cơ bản"
						isAdmin={user?.role === "admin"}
					/>
				</TabsContent>
				<TabsContent value="advanced">
					<CoursePanel
						title="Khóa học nâng cao"
						isAdmin={user?.role === "admin"}
					/>
				</TabsContent>
			</Tabs>
		</div>
	);
};

const CoursePanel = ({
	title,
	isAdmin,
}: {
	title: string;
	isAdmin: boolean;
}) => {
	return (
		<div className="space-y-6">
			{/* Player Section */}
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>Chọn khóa học để xem video</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="mb-6">
						<Select>
							<SelectTrigger className="w-full md:w-1/2">
								<SelectValue placeholder="-- Chọn khóa học --" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="course1">Nhập môn Tử Vi</SelectItem>
								<SelectItem value="course2">Luận giải cung Mệnh</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="aspect-video bg-black rounded-lg flex items-center justify-center text-white">
						<p>Video Player Placeholder</p>
					</div>
				</CardContent>
			</Card>

			{/* Admin Config Section */}
			{isAdmin && (
				<Card className="border-dashed border-2 border-indigo-200 bg-indigo-50/30">
					<CardHeader>
						<CardTitle className="text-indigo-800">Cấu hình {title}</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end border-b pb-4">
							<div className="space-y-1">
								<span className="text-sm font-medium">Tên khóa học</span>
								<Input placeholder="VD: Bài 1..." />
							</div>
							<div className="space-y-1">
								<span className="text-sm font-medium">Link YouTube / ID</span>
								<Input placeholder="Video ID" />
							</div>
							<Button variant="destructive" size="sm">
								Xóa
							</Button>
						</div>

						<div className="flex gap-2 pt-2">
							<Button size="sm" variant="secondary">
								+ Thêm dòng
							</Button>
							<Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
								Lưu cấu hình
							</Button>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
};
