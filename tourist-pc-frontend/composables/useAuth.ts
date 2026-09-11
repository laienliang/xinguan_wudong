export function useAuth() {
  const { request, token } = useApi();
  const user = useState<Record<string, any> | null>("tourist-user", () => null);

  function hydrate() {
    if (!import.meta.client) return;
    token.value = localStorage.getItem("wudong-token");
    const raw = localStorage.getItem("wudong-user");
    user.value = raw ? JSON.parse(raw) : null;
  }

  async function login(phone: string, password: string) {
    const result = await request<{ token: string; user?: Record<string, any> }>(
      "/app/user/login/password",
      {
        method: "POST",
        body: { phone, password },
      },
    );
    token.value = result.token;
    user.value = result.user || { phone };
    if (import.meta.client) {
      localStorage.setItem("wudong-token", result.token);
      localStorage.setItem("wudong-user", JSON.stringify(user.value));
    }
    return result;
  }

  async function register(phone: string, password: string, nickName: string) {
    const result = await request<{ token: string; user?: Record<string, any> }>(
      "/app/user/login/register",
      {
        method: "POST",
        body: { phone, password, nickName },
      },
    );
    token.value = result.token;
    user.value = result.user || { phone, nickName };
    if (import.meta.client) {
      localStorage.setItem("wudong-token", result.token);
      localStorage.setItem("wudong-user", JSON.stringify(user.value));
    }
    return result;
  }

  function logout() {
    token.value = null;
    user.value = null;
    if (import.meta.client) {
      localStorage.removeItem("wudong-token");
      localStorage.removeItem("wudong-user");
    }
  }

  function requireAuth() {
    if (!token.value) {
      navigateTo("/login");
      return false;
    }
    return true;
  }

  if (import.meta.client) {
    onMounted(() => {
      if (!token.value) hydrate();
    });
  }
  return { token, user, hydrate, login, register, logout, requireAuth };
}
