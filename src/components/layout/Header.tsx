import { Bell, LogOut, Settings, User as UserIcon } from "lucide-react";
import type React from "react";
import type { User } from "@/common/types";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ user, setUser }) => {
	return (
		<header className="bg-white shadow-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				{/* Brand */}
				<div className="flex items-center gap-3">
					<img
						src="/static/logo-site.png"
						alt="Logo"
						className="h-10 w-10 object-contain"
					/>
					<h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
						Học Viện Huyền Học
					</h1>
				</div>

				{/* User Actions */}
				<div className="flex items-center gap-4">
					{user ? (
						<>
							{/* Notification Bell */}
							<Button variant="ghost" size="icon" className="relative">
								<Bell className="h-5 w-5 text-gray-600" />
								{/* <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" /> */}
							</Button>

							{/* User Dropdown */}
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" className="flex items-center gap-2">
										<UserIcon className="h-5 w-5" />
										<span className="font-medium">{user.username}</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
									<DropdownMenuSeparator />
									{user.role === "admin" && (
										<DropdownMenuItem>
											<Settings className="mr-2 h-4 w-4" /> Admin Panel
										</DropdownMenuItem>
									)}
									<DropdownMenuItem>Đổi mật khẩu</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										onClick={() => setUser(null)}
										className="text-red-600"
									>
										<LogOut className="mr-2 h-4 w-4" /> Đăng xuất
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					) : (
						<div className="flex gap-2">
							<Button variant="ghost" onClick={() => console.log("Login")}>
								Đăng nhập
							</Button>
							<Button onClick={() => console.log("Register")}>Đăng ký</Button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
