import React from "react";
import {
  AlertCircle,
  Check,
  CreditCard,
  Landmark,
  LogIn,
  LockKeyhole,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

const orderProduct = {
  name: "Ventilador portátil K60A con motor brushless, batería 5000 y carga rápida Type-C",
  category: "Accesorios para laptop",
  price: 48.3,
  quantity: 1,
  image:
    "https://cahuana.com.pe/wp-content/uploads/2026/03/K60A-TOPK-Ventilador-portatil-K60A-con-motor-brushless-bateria-5000-y-carga-rapida-Type-C-300x300.webp",
};

const recommendedProducts = [
  {
    category: "Teclados para laptop",
    name: "TECLADO PARA SONY SVE14 SVE141 SVE1411 SVE1412 SVE1413 ESP E-B S/N EXT",
    price: 85,
    image:
      "https://cahuana.com.pe/wp-content/uploads/2026/03/TECLSON0178-TECLADO-PARA-SONY-SVE14-SVE141-SVE1411-SVE1412-SVE1413-ESP-E-B-S-N-EXT-300x300.png",
  },
  {
    category: "Teclados para laptop",
    name: "TECLADO PARA HP 15-BS 15-BS003CL 15-BS013DX ESP E-R C/N INT PLATEADO",
    oldPrice: 80,
    price: 75,
    image:
      "https://cahuana.com.pe/wp-content/uploads/2026/03/232-0304895-TECLADO-PARA-HP-15-BS-15-BS003CL-15-BS013DX-ESP-E-R-C-N-INT-PLATEADO_FONBLAN-300x300.png",
  },
  {
    category: "Accesorios para laptop",
    name: "Ventilador portátil multifuncional F2 - Ventilador y Lámpara 2 en 1",
    oldPrice: 29.9,
    price: 24.5,
    image:
      "https://cahuana.com.pe/wp-content/uploads/2026/03/Ventilador-portatil-multifuncional-F2-–-Ventilador-y-Lampara-2-en-1-Blanco-300x300.webp",
  },
  {
    category: "Accesorios para laptop",
    name: "Parlante portátil Bluetooth 203D con batería integrada y RGB",
    price: 28.5,
    image:
      "https://cahuana.com.pe/wp-content/uploads/2026/03/Parlante-portatiles-Bluetooth-203D-portatil-con-bateria-integrada-y-con-RGB-Azul-300x300.webp",
  },
  {
    category: "Gamer",
    name: "Mouse inalámbrico WD154 6D BT + 2.4GHz recargable con pantalla LCD",
    oldPrice: 49.9,
    price: 38.8,
    image:
      "https://cahuana.com.pe/wp-content/uploads/2026/03/WD154-Mouse-inalambrico-WD154-6D-BT-2.4GHz-recargable-con-luz-transparente-y-pantalla-LCD-300x300.webp",
  },
  {
    category: "Accesorios para laptop",
    name: "Mouse inalámbrico Gaming G-551-C recargable 2.4G con luces RGB",
    oldPrice: 49.9,
    price: 42.4,
    image:
      "https://cahuana.com.pe/wp-content/uploads/2026/03/G-551-C-Mouse-inalambrico-Gaming-G-551-C-recargable-2.4G-con-luces-RGB-300x300.webp",
  },
];

const peruDeliveryZones = [
  "Amazonas - Bagua / Bagua",
  "Amazonas - Bongará / Jumbilla",
  "Amazonas - Chachapoyas / Chachapoyas",
  "Amazonas - Condorcanqui / Santa María de Nieva",
  "Amazonas - Luya / Lamud",
  "Amazonas - Rodríguez de Mendoza / Mendoza",
  "Amazonas - Utcubamba / Bagua Grande",
  "Áncash - Aija / Aija",
  "Áncash - Antonio Raymondi / Llamellín",
  "Áncash - Asunción / Chacas",
  "Áncash - Bolognesi / Chiquián",
  "Áncash - Carhuaz / Carhuaz",
  "Áncash - Carlos Fermín Fitzcarrald / San Luis",
  "Áncash - Casma / Casma",
  "Áncash - Corongo / Corongo",
  "Áncash - Huaraz / Huaraz",
  "Áncash - Huari / Huari",
  "Áncash - Huarmey / Huarmey",
  "Áncash - Huaylas / Caraz",
  "Áncash - Mariscal Luzuriaga / Piscobamba",
  "Áncash - Pallasca / Cabana",
  "Áncash - Pomabamba / Pomabamba",
  "Áncash - Recuay / Recuay",
  "Áncash - Santa / Chimbote",
  "Áncash - Sihuas / Sihuas",
  "Áncash - Yungay / Yungay",
  "Apurímac - Abancay / Abancay",
  "Apurímac - Andahuaylas / Andahuaylas",
  "Apurímac - Antabamba / Antabamba",
  "Apurímac - Aymaraes / Chalhuanca",
  "Apurímac - Chincheros / Chincheros",
  "Apurímac - Cotabambas / Tambobamba",
  "Apurímac - Grau / Chuquibambilla",
  "Arequipa - Arequipa / Arequipa",
  "Arequipa - Camaná / Camaná",
  "Arequipa - Caravelí / Caravelí",
  "Arequipa - Castilla / Aplao",
  "Arequipa - Caylloma / Chivay",
  "Arequipa - Condesuyos / Chuquibamba",
  "Arequipa - Islay / Mollendo",
  "Arequipa - La Unión / Cotahuasi",
  "Ayacucho - Cangallo / Cangallo",
  "Ayacucho - Huamanga / Ayacucho",
  "Ayacucho - Huanca Sancos / Sancos",
  "Ayacucho - Huanta / Huanta",
  "Ayacucho - La Mar / San Miguel",
  "Ayacucho - Lucanas / Puquio",
  "Ayacucho - Parinacochas / Coracora",
  "Ayacucho - Paucar del Sara Sara / Pausa",
  "Ayacucho - Sucre / Querobamba",
  "Ayacucho - Víctor Fajardo / Huancapi",
  "Ayacucho - Vilcas Huamán / Vilcas Huamán",
  "Cajamarca - Cajabamba / Cajabamba",
  "Cajamarca - Cajamarca / Cajamarca",
  "Cajamarca - Celendín / Celendín",
  "Cajamarca - Chota / Chota",
  "Cajamarca - Contumazá / Contumazá",
  "Cajamarca - Cutervo / Cutervo",
  "Cajamarca - Hualgayoc / Bambamarca",
  "Cajamarca - Jaén / Jaén",
  "Cajamarca - San Ignacio / San Ignacio",
  "Cajamarca - San Marcos / San Marcos",
  "Cajamarca - San Miguel / San Miguel",
  "Cajamarca - San Pablo / San Pablo",
  "Cajamarca - Santa Cruz / Santa Cruz",
  "Callao - Callao / Callao",
  "Cusco - Acomayo / Acomayo",
  "Cusco - Anta / Anta",
  "Cusco - Calca / Calca",
  "Cusco - Canas / Yanaoca",
  "Cusco - Canchis / Sicuani",
  "Cusco - Chumbivilcas / Santo Tomás",
  "Cusco - Cusco / Cusco",
  "Cusco - Espinar / Espinar",
  "Cusco - La Convención / Quillabamba",
  "Cusco - Paruro / Paruro",
  "Cusco - Paucartambo / Paucartambo",
  "Cusco - Quispicanchi / Urcos",
  "Cusco - Urubamba / Urubamba",
  "Huancavelica - Acobamba / Acobamba",
  "Huancavelica - Angaraes / Lircay",
  "Huancavelica - Castrovirreyna / Castrovirreyna",
  "Huancavelica - Churcampa / Churcampa",
  "Huancavelica - Huancavelica / Huancavelica",
  "Huancavelica - Huaytará / Huaytará",
  "Huancavelica - Tayacaja / Pampas",
  "Huánuco - Ambo / Ambo",
  "Huánuco - Dos de Mayo / La Unión",
  "Huánuco - Huacaybamba / Huacaybamba",
  "Huánuco - Huamalíes / Llata",
  "Huánuco - Huánuco / Huánuco",
  "Huánuco - Lauricocha / Jesús",
  "Huánuco - Leoncio Prado / Tingo María",
  "Huánuco - Marañón / Huacrachuco",
  "Huánuco - Pachitea / Panao",
  "Huánuco - Puerto Inca / Puerto Inca",
  "Huánuco - Yarowilca / Chavinillo",
  "Ica - Chincha / Chincha Alta",
  "Ica - Ica / Ica",
  "Ica - Nazca / Nazca",
  "Ica - Palpa / Palpa",
  "Ica - Pisco / Pisco",
  "Junín - Chanchamayo / La Merced",
  "Junín - Chupaca / Chupaca",
  "Junín - Concepción / Concepción",
  "Junín - Huancayo / Huancayo",
  "Junín - Jauja / Jauja",
  "Junín - Junín / Junín",
  "Junín - Satipo / Satipo",
  "Junín - Tarma / Tarma",
  "Junín - Yauli / La Oroya",
  "La Libertad - Ascope / Ascope",
  "La Libertad - Bolívar / Bolívar",
  "La Libertad - Chepén / Chepén",
  "La Libertad - Gran Chimú / Cascas",
  "La Libertad - Julcán / Julcán",
  "La Libertad - Otuzco / Otuzco",
  "La Libertad - Pacasmayo / San Pedro de Lloc",
  "La Libertad - Pataz / Tayabamba",
  "La Libertad - Sánchez Carrión / Huamachuco",
  "La Libertad - Santiago de Chuco / Santiago de Chuco",
  "La Libertad - Trujillo / Trujillo",
  "La Libertad - Virú / Virú",
  "Lambayeque - Chiclayo / Chiclayo",
  "Lambayeque - Ferreñafe / Ferreñafe",
  "Lambayeque - Lambayeque / Lambayeque",
  "Lima - Barranca / Barranca",
  "Lima - Cajatambo / Cajatambo",
  "Lima - Canta / Canta",
  "Lima - Cañete / San Vicente de Cañete",
  "Lima - Huaral / Huaral",
  "Lima - Huarochirí / Matucana",
  "Lima - Huaura / Huacho",
  "Lima - Lima / Cercado de Lima",
  "Lima - Lima / Jesús María",
  "Lima - Lima / La Molina",
  "Lima - Lima / Los Olivos",
  "Lima - Lima / Miraflores",
  "Lima - Lima / San Borja",
  "Lima - Lima / San Isidro",
  "Lima - Lima / San Juan de Lurigancho",
  "Lima - Lima / San Martín de Porres",
  "Lima - Lima / Santiago de Surco",
  "Lima - Lima / Villa El Salvador",
  "Lima - Oyón / Oyón",
  "Lima - Yauyos / Yauyos",
  "Loreto - Alto Amazonas / Yurimaguas",
  "Loreto - Datem del Marañón / San Lorenzo",
  "Loreto - Loreto / Nauta",
  "Loreto - Mariscal Ramón Castilla / Caballococha",
  "Loreto - Maynas / Iquitos",
  "Loreto - Putumayo / San Antonio del Estrecho",
  "Loreto - Requena / Requena",
  "Loreto - Ucayali / Contamana",
  "Madre de Dios - Manu / Salvación",
  "Madre de Dios - Tahuamanu / Iñapari",
  "Madre de Dios - Tambopata / Puerto Maldonado",
  "Moquegua - General Sánchez Cerro / Omate",
  "Moquegua - Ilo / Ilo",
  "Moquegua - Mariscal Nieto / Moquegua",
  "Pasco - Daniel Alcides Carrión / Yanahuanca",
  "Pasco - Oxapampa / Oxapampa",
  "Pasco - Pasco / Cerro de Pasco",
  "Piura - Ayabaca / Ayabaca",
  "Piura - Huancabamba / Huancabamba",
  "Piura - Morropón / Chulucanas",
  "Piura - Paita / Paita",
  "Piura - Piura / Piura",
  "Piura - Sechura / Sechura",
  "Piura - Sullana / Sullana",
  "Piura - Talara / Talara",
  "Puno - Azángaro / Azángaro",
  "Puno - Carabaya / Macusani",
  "Puno - Chucuito / Juli",
  "Puno - El Collao / Ilave",
  "Puno - Huancané / Huancané",
  "Puno - Lampa / Lampa",
  "Puno - Melgar / Ayaviri",
  "Puno - Moho / Moho",
  "Puno - Puno / Puno",
  "Puno - San Antonio de Putina / Putina",
  "Puno - San Román / Juliaca",
  "Puno - Sandia / Sandia",
  "Puno - Yunguyo / Yunguyo",
  "San Martín - Bellavista / Bellavista",
  "San Martín - El Dorado / San José de Sisa",
  "San Martín - Huallaga / Saposoa",
  "San Martín - Lamas / Lamas",
  "San Martín - Mariscal Cáceres / Juanjuí",
  "San Martín - Moyobamba / Moyobamba",
  "San Martín - Picota / Picota",
  "San Martín - Rioja / Rioja",
  "San Martín - San Martín / Tarapoto",
  "San Martín - Tocache / Tocache",
  "Tacna - Candarave / Candarave",
  "Tacna - Jorge Basadre / Locumba",
  "Tacna - Tacna / Tacna",
  "Tacna - Tarata / Tarata",
  "Tumbes - Contralmirante Villar / Zorritos",
  "Tumbes - Tumbes / Tumbes",
  "Tumbes - Zarumilla / Zarumilla",
  "Ucayali - Atalaya / Atalaya",
  "Ucayali - Coronel Portillo / Pucallpa",
  "Ucayali - Padre Abad / Aguaytía",
  "Ucayali - Purús / Puerto Esperanza",
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(price);

const CHECKOUT_DRAFT_KEY = "cahuanaCheckoutDraft";
const AUTH_KEYS = ["cahuanaAuthToken", "cahuanaUser", "authToken", "user"];

const initialCheckoutForm = {
  firstName: "",
  lastName: "",
  dni: "",
  phone: "",
  email: "",
  country: "Peru",
  department: "",
  shippingAddress: "",
  ruc: "",
  company: "",
  billingAddress: "",
  needsInvoice: false,
  payment: "culqi",
};

type CheckoutForm = typeof initialCheckoutForm;
type CheckoutField = keyof CheckoutForm;

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) => (
  <label className="block">
    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
      {label}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(event) => onChange(event.target.value)}
      className="h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-sm text-gray-800 outline-none transition-all duration-200 hover:border-gray-300 focus:border-[#00c853] focus:shadow-[0_8px_22px_rgba(0,200,83,0.12)] focus:ring-4 focus:ring-[#00c853]/10"
    />
  </label>
);

const Select = ({
  label,
  children,
  value,
  onChange,
  required = false,
}: {
  label: string;
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) => (
  <label className="block">
    <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
      {label}
    </span>
    <select
      value={value}
      required={required}
      onChange={(event) => onChange(event.target.value)}
      className="h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-sm text-gray-800 outline-none transition-all duration-200 hover:border-gray-300 focus:border-[#00c853] focus:shadow-[0_8px_22px_rgba(0,200,83,0.12)] focus:ring-4 focus:ring-[#00c853]/10"
    >
      {children}
    </select>
  </label>
);

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

  const updateField = (field: CheckoutField, value: CheckoutForm[CheckoutField]) => {
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
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00a942]">
                Checkout seguro
              </p>
              <h1 className="text-3xl font-black text-gray-950 md:text-4xl">
                Finaliza tu compra con respaldo Cahuana
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
                Completa tus datos, confirma el método de pago y recibe
                atención especializada para tu pedido.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs font-bold text-gray-700">
              <span className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00c853]/40 hover:shadow-sm">
                <ShieldCheck className="h-4 w-4 text-[#00c853]" />
                Pago protegido
              </span>
              <span className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00c853]/40 hover:shadow-sm">
                <Truck className="h-4 w-4 text-[#00c853]" />
                Envío nacional
              </span>
              <span className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00c853]/40 hover:shadow-sm">
                <Package className="h-4 w-4 text-[#00c853]" />
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
                onChange={(value) => updateField("firstName", value)}
                required
              />
              <Input
                label="Apellidos *"
                placeholder="Ej. Cahuana Ramos"
                value={form.lastName}
                onChange={(value) => updateField("lastName", value)}
                required
              />
              <Input
                label="DNI *"
                placeholder="Ingresa tu DNI"
                value={form.dni}
                onChange={(value) => updateField("dni", value)}
                required
              />
              <Input
                label="Teléfono *"
                placeholder="Número para coordinar"
                value={form.phone}
                onChange={(value) => updateField("phone", value)}
                required
              />
              <div className="md:col-span-2">
                <Input
                  label="Correo electrónico *"
                  placeholder="correo@ejemplo.com"
                  type="email"
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
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
                  Indica dónde recibirás tu pedido para calcular cobertura y coordinación.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Select
                label="País / Región *"
                value={form.country}
                onChange={(value) => updateField("country", value)}
                required
              >
                <option value="Peru">Perú</option>
              </Select>
              <Select
                label="Departamento *"
                value={form.department}
                onChange={(value) => updateField("department", value)}
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
                  onChange={(value) => updateField("shippingAddress", value)}
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
              <label className="inline-flex cursor-pointer items-center gap-3 rounded-md border border-gray-200 px-4 py-3 text-sm font-bold text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00c853] hover:bg-[#f0fff4] hover:shadow-sm">
                <input
                  type="checkbox"
                  checked={form.needsInvoice}
                  onChange={(event) => updateField("needsInvoice", event.target.checked)}
                  className="h-4 w-4 accent-[#00c853]"
                />
                Solicitar factura
              </label>
            </div>

            {form.needsInvoice && (
              <div className="mt-6 grid gap-4 rounded-md border border-[#00c853]/20 bg-[#f7fff9] p-4 md:grid-cols-2">
              <Input
                label="RUC *"
                placeholder="Ingresa el RUC"
                value={form.ruc}
                onChange={(value) => updateField("ruc", value)}
                required
              />
              <Input
                label="Empresa *"
                placeholder="Razón social"
                value={form.company}
                onChange={(value) => updateField("company", value)}
                required
              />
              <div className="md:col-span-2">
                <Input
                  label="Dirección de facturación *"
                  placeholder="Dirección fiscal o dirección de facturación"
                  value={form.billingAddress}
                  onChange={(value) => updateField("billingAddress", value)}
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
                  className="group flex min-h-[360px] flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00c853]/30 hover:shadow-xl"
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
                        <span className="text-lg font-black text-[#00a942]">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="h-11 w-full rounded-md bg-[#00c853] text-sm font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00a942] hover:shadow-lg hover:shadow-[#00c853]/20 active:translate-y-0"
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
                  <p className="text-xs font-bold text-[#00a942]">
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
                  <strong className="text-[#00a942]">
                    {formatPrice(subtotal)}
                  </strong>
                </div>
              </div>

              <div className="space-y-3 py-5">
                <label className="flex cursor-pointer items-start gap-3 rounded-md border-2 border-[#00c853] bg-[#f0fff4] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <input
                    type="radio"
                    name="payment"
                    checked={form.payment === "culqi"}
                    onChange={() => updateField("payment", "culqi")}
                    className="mt-1 accent-[#00c853]"
                  />
                  <span>
                    <span className="flex items-center gap-2 font-black text-gray-950">
                      <CreditCard className="h-4 w-4 text-[#00c853]" />
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
                    className="accent-[#00c853]"
                  />
                  <Landmark className="h-4 w-4 text-gray-500" />
                  Transferencia bancaria directa
                </label>
              </div>

              <div className="mb-5 rounded-md bg-gray-50 p-4 text-xs leading-relaxed text-gray-600">
                <div className="mb-2 flex items-center gap-2 font-black text-gray-950">
                  <LockKeyhole className="h-4 w-4 text-[#00c853]" />
                  Compra protegida
                </div>
                Tus datos se utilizarán para procesar tu pedido y respaldar tu
                experiencia de compra.
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#00c853] text-sm font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00a942] hover:shadow-lg hover:shadow-[#00c853]/25 active:translate-y-0"
              >
                <Check className="h-4 w-4" />
                Realizar el pedido
              </button>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-bold text-gray-600">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#00c853]" />
                  Recojo en tienda
                </span>
                <span className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[#00c853]" />
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
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f9ee]">
              <AlertCircle className="h-6 w-6 text-[#00a942]" />
            </div>
            <h2 id="checkout-login-title" className="text-2xl font-black text-gray-950">
              Inicia sesión para continuar
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Aún no has iniciado sesión. Guardamos los datos que completaste y
              tu producto para que, al volver, solo tengas que confirmar el pago.
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
                className="flex h-11 items-center justify-center gap-2 rounded-md bg-[#00c853] text-sm font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00a942] hover:shadow-lg hover:shadow-[#00c853]/25 active:translate-y-0"
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
