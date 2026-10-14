import { Link, useNavigate } from "react-router";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/registerSchema";

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit() {
    navigate("/sign-in");
  }

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center space-y-6 px-4 py-8">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <UserPlus className="size-4" />
          Akun pembelajaran
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Sign Up</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Buat akun baru untuk menggunakan dashboard.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 rounded-xl border bg-card p-6 shadow-sm"
        noValidate
      >
        <label className="grid gap-2 text-sm font-medium">
          Nama lengkap
          <Input
            placeholder="Nama lengkap"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm text-destructive" role="alert">
              {errors.name.message}
            </span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <Input
            type="email"
            placeholder="nama@email.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-destructive" role="alert">
              {errors.email.message}
            </span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Password
          <Input
            type="password"
            autoComplete="new-password"
            aria-invalid={Boolean(errors.password)}
            {...register("password")}
          />
          {errors.password && (
            <span className="text-sm text-destructive" role="alert">
              {errors.password.message}
            </span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Konfirmasi password
          <Input
            type="password"
            autoComplete="new-password"
            aria-invalid={Boolean(errors.confirmPassword)}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-destructive" role="alert">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Buat akun
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Sudah punya akun?{" "}
          <Link className="font-medium text-primary" to="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </section>
  );
}

export default SignUp;
