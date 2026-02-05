import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { User } from "@/common/types";
import { CoursesTab } from "@/components/courses/CoursesTab";
import { HoroscopeTab } from "@/components/horoscope/HoroscopeTab";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const [user, setUser] = useState<User | null>({
		username: "DemoUser",
		role: "admin",
	}); // Mock login
	const [activeTab, setActiveTab] = useState("luangiai");
	return (
		<div className="min-h-screen bg-gray-50 font-sans text-gray-900">
			<main className="container mx-auto px-4 py-6 max-w-6xl">
				{/* Main Tab Navigation */}
				<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
					<div className="flex justify-center mb-6">
						<TabsList className="grid w-full max-w-md grid-cols-2 h-12">
							<TabsTrigger value="luangiai" className="text-lg">
								Luận giải tử vi
							</TabsTrigger>
							<TabsTrigger value="khoahoc" className="text-lg">
								Khóa học
							</TabsTrigger>
						</TabsList>
					</div>

					<div className="flex justify-center gap-4 mb-6">
						<Button
							variant="outline"
							className="bg-[#1877F2] text-white hover:bg-blue-700 border-none"
							onClick={() => window.open("https://facebook.com", "_blank")}
						>
							Tham Gia Nhóm Facebook
						</Button>
						<Button
							variant="outline"
							className="bg-[#0068FF] text-white hover:bg-blue-600 border-none"
							onClick={() => window.open("https://zalo.me", "_blank")}
						>
							Tham Gia Nhóm Zalo
						</Button>
					</div>

					<TabsContent value="luangiai">
						<HoroscopeTab user={user} />
					</TabsContent>

					<TabsContent value="khoahoc">
						<CoursesTab user={user} />
					</TabsContent>
				</Tabs>
			</main>
		</div>
	);
}
