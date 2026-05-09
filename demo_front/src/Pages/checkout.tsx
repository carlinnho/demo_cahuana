import React from "react";
import {
  ShieldCheck,
  Truck,
  Package,
  CreditCard,
  Landmark,
  LockKeyhole,
  Check,
  MapPin,
  AlertCircle,
  LogIn,
} from "lucide-react";

// ─── 1. TIPOS E INTERFACES FALTANTES ───
type CheckoutField =
  | "firstName"
  | "lastName"
  | "dni"
  | "phone"
  | "email"
  | "country"
  | "department"
  | "shippingAddress"
  | "needsInvoice"
  | "ruc"
  | "company"
  | "billingAddress"
  | "payment";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  dni: string;
  phone: string;
  email: string;
  country: string;
  department: string;
  shippingAddress: string;
  needsInvoice: boolean;
  ruc: string;
  company: string;
  billingAddress: string;
  payment: string;
}

// ─── 2. DATOS Y CONSTANTES FALTANTES ───
const initialCheckoutForm: CheckoutForm = {
  firstName: "",
  lastName: "",
  dni: "",
  phone: "",
  email: "",
  country: "Peru",
  department: "",
  shippingAddress: "",
  needsInvoice: false,
  ruc: "",
  company: "",
  billingAddress: "",
  payment: "culqi",
};

const CHECKOUT_DRAFT_KEY = "checkout_draft";
const AUTH_KEYS = ["user_session", "token"];
const peruDeliveryZones = [
  "Lima",
  "Arequipa",
  "Cusco",
  "Piura",
  "La Libertad",
  "Lambayeque",
];

const formatPrice = (price: number) => `S/ ${price.toFixed(2)}`;

// Producto simulado que se está comprando
const orderProduct = {
  name: "TECLADO PARA SONY SVE14 SVE141 SVE1411 SVE1412 SVE1413",
  category: "Teclados",
  price: 75.22,
  quantity: 1,
  image: "https://placehold.co/300x300/f8fafc/313131?text=Teclado+Sony",
};

// Productos recomendados simulados
const recommendedProducts = [
  {
    name: "MOUSE INALÁMBRICO LOGITECH M170 NEGRO CONEXIÓN USB",
    category: "Accesorios",
    price: 35.0,
    oldPrice: 45.0,
    image: "https://placehold.co/300x300/f8fafc/313131?text=Mouse+Logitech",
  },
];

// ─── 3. COMPONENTES DE UI FALTANTES (Input y Select) ───
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[13px] font-bold text-gray-700">{label}</label>
    <input
      className="rounded-md border border-gray-300 px-3 py-2.5 text-[14px] outline-none transition-colors focus:border-[#42BC0D] focus:ring-1 focus:ring-[#42BC0D]"
      {...props}
    />
  </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children?: React.ReactNode;
}

const Select = ({ label, children, ...props }: SelectProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[13px] font-bold text-gray-700">{label}</label>
    <select
      className="rounded-md border border-gray-300 px-3 py-2.5 text-[14px] outline-none transition-colors focus:border-[#42BC0D] focus:ring-1 focus:ring-[#42BC0D]"
      {...props}
    >
      {children}
    </select>
  </div>
);

// ─── 4. COMPONENTE PRINCIPAL ───
const Checkout: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [form, setForm] = React.useState<CheckoutForm>(() => {
    if (typeof window === "undefined") return initialCheckoutForm;

    const savedDraft = window.sessionStorage.getItem(CHECKOUT_DRAFT_KEY);
    if (!savedDraft) return initialCheckoutForm;

    try {
      return { ...initialCheckoutForm, ...JSON.parse(savedDraft) };
    } catch {
      return initialCheckoutForm;
    }
  });

  const [showLoginNotice, setShowLoginNotice] = React.useState(false);
  const subtotal = orderProduct.price * orderProduct.quantity;

  const isLoggedIn = React.useMemo(() => {
    if (typeof window === "undefined") return false;

    return AUTH_KEYS.some(
      (key) =>
        Boolean(window.localStorage.getItem(key)) ||
        Boolean(window.sessionStorage.getItem(key)),
    );
  }, []);

  React.useEffect(() => {
    window.sessionStorage.setItem(CHECKOUT_DRAFT_KEY, JSON.stringify(form));
  }, [form]);

  const updateField = (
    field: CheckoutField,
    value: CheckoutForm[CheckoutField],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const saveCheckoutDraft = () => {
    window.sessionStorage.setItem(
      CHECKOUT_DRAFT_KEY,
      JSON.stringify({
        ...form,
        product: orderProduct,
      }),
    );
  };

  const handleLoginRedirect = () => {
    saveCheckoutDraft();
    window.location.href = "/login?redirect=/checkout";
  };

  const handlePlaceOrder = () => {
    saveCheckoutDraft();

    if (!formRef.current?.reportValidity()) {
      return;
    }

    if (!isLoggedIn) {
      setShowLoginNotice(true);
      return;
    }

    window.alert("Sesión verificada. Continuando con el pago.");
  };

  return (
    <div className="bg-[#f6f8f7]">
      <section className="border-b border-gray-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#42BC0D]">
                Checkout seguro
              </p>
              <h1 className="text-3xl font-black text-gray-950 md:text-4xl">
                Finaliza tu compra con respaldo Cahuana
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
                Completa tus datos, confirma el método de pago y recibe atención
                especializada para tu pedido.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs font-bold text-gray-700">
              <span className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#42BC0D]/40 hover:shadow-sm">
                <ShieldCheck className="h-4 w-4 text-[#42BC0D]" />
                Pago protegido
              </span>
              <span className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#42BC0D]/40 hover:shadow-sm">
                <Truck className="h-4 w-4 text-[#42BC0D]" />
                Envío nacional
              </span>
              <span className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#42BC0D]/40 hover:shadow-sm">
                <Package className="h-4 w-4 text-[#42BC0D]" />
                Stock verificado
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1480px] gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-12 xl:px-16">
        <form
          ref={formRef}
          className="space-y-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <section className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-gray-950">
                  Detalles de compra
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Usa datos reales para validar pago, envío y comprobante.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Input
                label="Nombre *"
                placeholder="Ej. Luis"
                value={form.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField("firstName", e.target.value)}
                required
              />
              <Input
                label="Apellidos *"
                placeholder="Ej. Cahuana Ramos"
                value={form.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField("lastName", e.target.value)}
                required
              />
              <Input
                label="DNI *"
                placeholder="Ingresa tu DNI"
                value={form.dni}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField("dni", e.target.value)}
                required
              />
              <Input
                label="Teléfono *"
                placeholder="Número para coordinar"
                value={form.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField("phone", e.target.value)}
                required
              />
              <div className="md:col-span-2">
                <Input
                  label="Correo electrónico *"
                  placeholder="correo@ejemplo.com"
                  type="email"
                  value={form.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField("email", e.target.value)}
                  required
                />
              </div>
            </div>
          </section>

          <section className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-gray-950">
                  Detalle de envío
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Indica dónde recibirás tu pedido para calcular cobertura y
                  coordinación.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Select
                label="País / Región *"
                value={form.country}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateField("country", e.target.value)}
                required
              >
                <option value="Peru">Perú</option>
              </Select>
              <Select
                label="Departamento *"
                value={form.department}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateField("department", e.target.value)}
                required
              >
                <option value="">Elige una opción...</option>
                {peruDeliveryZones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </Select>
              <div className="md:col-span-2">
                <Input
                  label="Dirección de envío *"
                  placeholder="Av., calle, número, distrito y referencia"
                  value={form.shippingAddress}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateField("shippingAddress", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </section>

          <section className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-gray-950">
                  Facturación
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Activa esta opción solo si necesitas emitir factura.
                </p>
              </div>
              <label className="inline-flex cursor-pointer items-center gap-3 rounded-md border border-gray-200 px-4 py-3 text-sm font-bold text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#42BC0D] hover:bg-[#F0FDE8] hover:shadow-sm">
                <input
                  type="checkbox"
                  checked={form.needsInvoice}
                  onChange={(event) =>
                    updateField("needsInvoice", event.target.checked)
                  }
                  className="h-4 w-4 accent-[#42BC0D]"
                />
                Solicitar factura
              </label>
            </div>

            {form.needsInvoice && (
              <div className="mt-6 grid gap-4 rounded-md border border-[#42BC0D]/20 bg-[#F0FDE8] p-4 md:grid-cols-2">
                <Input
                  label="RUC *"
                  placeholder="Ingresa el RUC"
                  value={form.ruc}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField("ruc", e.target.value)}
                  required
                />
                <Input
                  label="Empresa *"
                  placeholder="Razón social"
                  value={form.company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField("company", e.target.value)}
                  required
                />
                <div className="md:col-span-2">
                  <Input
                    label="Dirección de facturación *"
                    placeholder="Dirección fiscal o dirección de facturación"
                    value={form.billingAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updateField("billingAddress", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            )}
          </section>

          <section className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
            <h2 className="mb-4 text-xl font-black text-gray-950">
              Productos que también pueden ayudarte
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {recommendedProducts.map((product) => (
                <article
                  key={product.name}
                  className="group flex min-h-[360px] flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#42BC0D]/30 hover:shadow-xl"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-gray-50 p-5">
                    {product.oldPrice && (
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-700 shadow-sm">
                        ¡Oferta!
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-xs font-semibold text-gray-500">
                      {product.category}
                    </p>
                    <h3 className="mt-2 line-clamp-3 text-sm font-black leading-snug text-gray-950">
                      {product.name}
                    </h3>
                    <div className="mt-auto pt-4">
                      <div className="mb-3 flex items-center gap-2">
                        {product.oldPrice && (
                          <span className="text-sm font-bold text-gray-300 line-through">
                            {formatPrice(product.oldPrice)}
                          </span>
                        )}
                        <span className="text-lg font-black text-[#42BC0D]">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="h-11 w-full rounded-md bg-[#42BC0D] text-sm font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#38a00b] hover:shadow-lg hover:shadow-[#42BC0D]/20 active:translate-y-0"
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </form>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <section className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="border-b border-gray-100 bg-gray-950 px-6 py-5 text-white">
              <h2 className="text-xl font-black">Tu pedido</h2>
              <p className="mt-1 text-sm text-gray-300">
                Revisa tu compra antes de confirmar.
              </p>
            </div>

            <div className="p-6">
              <div className="flex gap-4 border-b border-gray-100 pb-5">
                <div className="h-20 w-20 shrink-0 rounded-md bg-gray-50 p-2 transition-transform duration-300 hover:scale-105">
                  <img
                    src={orderProduct.image}
                    alt={orderProduct.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#42BC0D]">
                    {orderProduct.category}
                  </p>
                  <h3 className="mt-1 text-sm font-bold leading-snug text-gray-950">
                    {orderProduct.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Cantidad: {orderProduct.quantity}
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-b border-gray-100 py-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-gray-600">Envío</span>
                  <span className="text-right text-gray-500">
                    Ingresa tu dirección para ver las opciones de envío.
                  </span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span className="font-black text-gray-950">Total</span>
                  <strong className="text-[#42BC0D]">
                    {formatPrice(subtotal)}
                  </strong>
                </div>
              </div>

              <div className="space-y-3 py-5">
                <label className="flex cursor-pointer items-start gap-3 rounded-md border-2 border-[#42BC0D] bg-[#F0FDE8] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <input
                    type="radio"
                    name="payment"
                    checked={form.payment === "culqi"}
                    onChange={() => updateField("payment", "culqi")}
                    className="mt-1 accent-[#42BC0D]"
                  />
                  <span>
                    <span className="flex items-center gap-2 font-black text-gray-950">
                      <CreditCard className="h-4 w-4 text-[#42BC0D]" />
                      Culqi, Yape y PagoEfectivo
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-gray-600">
                      Acepta tarjetas de débito y crédito, billeteras móviles,
                      agentes y bodegas.
                    </span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-md border border-gray-200 p-4 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    checked={form.payment === "transfer"}
                    onChange={() => updateField("payment", "transfer")}
                    className="accent-[#42BC0D]"
                  />
                  <Landmark className="h-4 w-4 text-gray-500" />
                  Transferencia bancaria directa
                </label>
              </div>

              <div className="mb-5 rounded-md bg-gray-50 p-4 text-xs leading-relaxed text-gray-600">
                <div className="mb-2 flex items-center gap-2 font-black text-gray-950">
                  <LockKeyhole className="h-4 w-4 text-[#42BC0D]" />
                  Compra protegida
                </div>
                Tus datos se utilizarán para procesar tu pedido y respaldar tu
                experiencia de compra.
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#42BC0D] text-sm font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#38a00b] hover:shadow-lg hover:shadow-[#42BC0D]/25 active:translate-y-0"
              >
                <Check className="h-4 w-4" />
                Realizar el pedido
              </button>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-bold text-gray-600">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#42BC0D]" />
                  Recojo en tienda
                </span>
                <span className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[#42BC0D]" />
                  Envío a provincia
                </span>
              </div>
            </div>
          </section>
        </aside>
      </main>

      {showLoginNotice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/60 px-5 backdrop-blur-sm transition-opacity duration-200">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-login-title"
            className="w-full max-w-md rounded-md border border-gray-200 bg-white p-6 shadow-2xl transition-all duration-200"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F0FDE8]">
              <AlertCircle className="h-6 w-6 text-[#42BC0D]" />
            </div>
            <h2
              id="checkout-login-title"
              className="text-2xl font-black text-gray-950"
            >
              Inicia sesión para continuar
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Aún no has iniciado sesión. Guardamos los datos que completaste y
              tu producto para que, al volver, solo tengas que confirmar el
              pago.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setShowLoginNotice(false)}
                className="h-11 rounded-md border border-gray-200 text-sm font-black text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm active:translate-y-0"
              >
                Seguir revisando
              </button>
              <button
                type="button"
                onClick={handleLoginRedirect}
                className="flex h-11 items-center justify-center gap-2 rounded-md bg-[#42BC0D] text-sm font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#38a00b] hover:shadow-lg hover:shadow-[#42BC0D]/25 active:translate-y-0"
              >
                <LogIn className="h-4 w-4" />
                Ir a login
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Checkout;
