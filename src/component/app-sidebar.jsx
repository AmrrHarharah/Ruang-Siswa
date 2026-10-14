import * as React from "react";
import { NavLink } from "react-router";
import {
  BellIcon,
  CalculatorIcon,
  CalendarIcon,
  ClipboardPasteIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  FolderPlusIcon,
  HelpCircleIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  ScissorsIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
  ZoomInIcon,
  ZoomOutIcon,
  BarChart3,
  BookOpen,
  CalendarDays,
  Layers3,
  Home,
  LogOut,
  UserRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLoginSchema } from "@/registerSchema";

const menuItems = [
  { title: "Home", url: "/admin", icon: Home, end: true },
  { title: "Santri", url: "/admin/santri", icon: BookOpen },
  { title: "Jadwal", url: "/admin/jadwal", icon: CalendarDays, end: true },
  { title: "Kelas", url: "/admin/kelas", icon: Layers3, end: true },
  { title: "About", url: "/admin/about", icon: BarChart3, end: true },
];

function CommandManyItems() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full">
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="h-8 w-full justify-start gap-2 px-2 text-sm font-normal hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <SettingsIcon className="size-4" />
        <span>Pengaturan</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem>
                <HomeIcon />
                <span>Home</span>
                <CommandShortcut>Cmd+H</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <InboxIcon />
                <span>Inbox</span>
                <CommandShortcut>Cmd+I</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FileTextIcon />
                <span>Documents</span>
                <CommandShortcut>Cmd+D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FolderIcon />
                <span>Folders</span>
                <CommandShortcut>Cmd+F</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>
                <PlusIcon />
                <span>New File</span>
                <CommandShortcut>Cmd+N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FolderPlusIcon />
                <span>New Folder</span>
                <CommandShortcut>Shift+Cmd+N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CopyIcon />
                <span>Copy</span>
                <CommandShortcut>Cmd+C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ScissorsIcon />
                <span>Cut</span>
                <CommandShortcut>Cmd+X</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ClipboardPasteIcon />
                <span>Paste</span>
                <CommandShortcut>Cmd+V</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <TrashIcon />
                <span>Delete</span>
                <CommandShortcut>Backspace</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="View">
              <CommandItem>
                <LayoutGridIcon />
                <span>Grid View</span>
              </CommandItem>
              <CommandItem>
                <ListIcon />
                <span>List View</span>
              </CommandItem>
              <CommandItem>
                <ZoomInIcon />
                <span>Zoom In</span>
                <CommandShortcut>Cmd+</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ZoomOutIcon />
                <span>Zoom Out</span>
                <CommandShortcut>Cmd-</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem>
                <UserIcon />
                <span>Profile</span>
                <CommandShortcut>Cmd+P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>Billing</span>
                <CommandShortcut>Cmd+B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>Settings</span>
                <CommandShortcut>Cmd+S</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <BellIcon />
                <span>Notifications</span>
              </CommandItem>
              <CommandItem>
                <HelpCircleIcon />
                <span>Help &amp; Support</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Tools">
              <CommandItem>
                <CalculatorIcon />
                <span>Calculator</span>
              </CommandItem>
              <CommandItem>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <ImageIcon />
                <span>Image Editor</span>
              </CommandItem>
              <CommandItem>
                <CodeIcon />
                <span>Code Editor</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}

function AdminAccess() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: { username: "", password: "" },
  });

  function handleLogin({ username, password }) {
    if (username === "admin" && password === "admin123") {
      window.localStorage.setItem("admin-authenticated", "true");
      setOpen(false);
      setError("");
      reset();
      navigate("/admin/pengaturan");
      return;
    }

    setError("Username atau password salah.");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-full justify-start gap-2 px-2 text-sm font-normal hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <SettingsIcon className="size-4" />
          <span>Admin</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(handleLogin)} noValidate>
          <DialogHeader>
            <DialogTitle>Masuk sebagai Admin</DialogTitle>
            <DialogDescription>
              Masukkan username dan password untuk membuka pengaturan.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <label className="grid gap-2 text-sm font-medium">
              Username
              <Input
                placeholder="Masukkan username"
                autoComplete="username"
                aria-invalid={Boolean(errors.username)}
                {...register("username")}
              />
              {errors.username && (
                <span className="text-sm text-destructive" role="alert">
                  {errors.username.message}
                </span>
              )}
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Password
              <Input
                type="password"
                placeholder="Masukkan password"
                autoComplete="current-password"
                aria-invalid={Boolean(errors.password)}
                {...register("password")}
              />
              {errors.password && (
                <span className="text-sm text-destructive" role="alert">
                  {errors.password.message}
                </span>
              )}
            </label>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          <DialogFooter>
            <Button type="submit">Masuk</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function LogoutButton() {
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("user-authenticated");
    window.localStorage.removeItem("admin-authenticated");
    navigate("/");
  }

  return (
    <Button
      variant="ghost"
      onClick={logout}
      className="h-8 w-full justify-start gap-2 px-2 text-sm font-normal hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    >
      <LogOut className="size-4" />
      <span>Log Out</span>
    </Button>
  );
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip="Ruang Siswa">
              <NavLink to="/admin" end>
                <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <BookOpen className="size-4" />
                </div>
                <span className="font-semibold group-data-[collapsible=icon]:hidden">
                  Ruang Siswa
                </span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink to={item.url} end={item.end}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profil">
              <NavLink to="/admin/profil">
                <UserRound />
                <span>Profil</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <CommandManyItems />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <AdminAccess />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <LogoutButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
