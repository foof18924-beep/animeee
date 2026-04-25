import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Lock, LogOut, Save } from "lucide-react";

export default function Admin() {
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const [newDownloadLink, setNewDownloadLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const verifyPasswordMutation = trpc.app.verifyPassword.useMutation();
  const updateLinkMutation = trpc.app.updateDownloadLink.useMutation();
  const { data: linkData } = trpc.app.getDownloadLink.useQuery();

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await verifyPasswordMutation.mutateAsync({ password });
      if (result.isValid) {
        setIsAuthenticated(true);
        setPassword("");
        setMessage({ type: "success", text: "تم التحقق من كلمة المرور بنجاح" });
        if (linkData?.downloadLink) {
          setDownloadLink(linkData.downloadLink);
          setNewDownloadLink(linkData.downloadLink);
        }
      } else {
        setMessage({ type: "error", text: "كلمة المرور غير صحيحة" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "حدث خطأ في التحقق من كلمة المرور" });
    }
  };

  const handleUpdateLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDownloadLink) {
      setMessage({ type: "error", text: "يرجى إدخال رابط التحميل" });
      return;
    }

    setIsSaving(true);
    try {
      await updateLinkMutation.mutateAsync({
        downloadLink: newDownloadLink,
        password: "abca2250",
      });
      setDownloadLink(newDownloadLink);
      setMessage({ type: "success", text: "تم تحديث رابط التحميل بنجاح" });
    } catch (error) {
      setMessage({ type: "error", text: "فشل تحديث رابط التحميل" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setNewDownloadLink("");
    setDownloadLink("");
    setMessage(null);
    setLocation("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-4">
        <Card className="bg-slate-800 border-slate-700 w-full max-w-md p-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <Lock className="h-6 w-6" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-2">لوحة التحكم</h1>
          <p className="text-slate-400 text-center mb-6">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">كلمة المرور</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-500"
              />
            </div>

            {message && (
              <div
                className={`p-3 rounded text-sm ${
                  message.type === "success"
                    ? "bg-green-900 text-green-200 border border-green-700"
                    : "bg-red-900 text-red-200 border border-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <Button
              type="submit"
              disabled={verifyPasswordMutation.isPending}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {verifyPasswordMutation.isPending ? "جاري التحقق..." : "دخول"}
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-600/10"
          >
            <LogOut className="mr-2 h-4 w-4" />
            تسجيل الخروج
          </Button>
        </div>

        <Card className="bg-slate-800 border-slate-700 p-8">
          <h2 className="text-2xl font-bold mb-6">إدارة رابط التحميل</h2>

          <form onSubmit={handleUpdateLink} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">الرابط الحالي</label>
              <div className="bg-slate-700 border border-slate-600 rounded p-3 text-sm text-slate-300 break-all">
                {downloadLink || "لم يتم تعيين رابط"}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">رابط التحميل الجديد</label>
              <Input
                type="url"
                value={newDownloadLink}
                onChange={(e) => setNewDownloadLink(e.target.value)}
                placeholder="https://example.com/download"
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-500"
              />
              <p className="text-xs text-slate-400 mt-2">
                أدخل رابط URL صحيح يبدأ بـ https:// أو http://
              </p>
            </div>

            {message && (
              <div
                className={`p-3 rounded text-sm ${
                  message.type === "success"
                    ? "bg-green-900 text-green-200 border border-green-700"
                    : "bg-red-900 text-red-200 border border-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <Button
              type="submit"
              disabled={isSaving || !newDownloadLink}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "جاري الحفظ..." : "حفظ التغييرات"}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-slate-700/50 rounded border border-slate-600">
            <h3 className="font-semibold mb-2">معلومات مهمة</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>• يتم تخزين رابط التحميل في قاعدة البيانات</li>
              <li>• سيتم استخدام الرابط الجديد فوراً عند الحفظ</li>
              <li>• تأكد من أن الرابط صحيح وآمن</li>
              <li>• يمكنك تحديث الرابط في أي وقت</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
