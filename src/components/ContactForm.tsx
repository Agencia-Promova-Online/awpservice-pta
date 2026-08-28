import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';
import { brands } from '@/data/brands';
import { machineCategories } from '@/data/machines';
import { buildWhatsAppFromForm } from '@/data/site';

export function ContactForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cidade: '',
    marca: '',
    equipamento: '',
    mensagem: '',
    website: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.website) return;

    setLoading(true);

    setTimeout(() => {
      const whatsappLink = buildWhatsAppFromForm({
        nome: formData.nome,
        empresa: formData.empresa,
        cidade: formData.cidade,
        marca: formData.marca,
        equipamento: formData.equipamento,
        mensagem: formData.mensagem,
      });

      window.open(whatsappLink, '_blank');
      navigate('/obrigado');
    }, 600);
  };

  const inputClass =
    'w-full rounded-lg border border-gray-700 bg-industrial-steel px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
            Nome *
          </label>
          <input
            type="text"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            className={inputClass}
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
            Empresa
          </label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className={inputClass}
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
            Cidade *
          </label>
          <input
            type="text"
            name="cidade"
            required
            value={formData.cidade}
            onChange={handleChange}
            className={inputClass}
            placeholder="Cidade / Estado"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
            Marca da Máquina
          </label>
          <select
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Selecione a marca</option>
            {brands.map((b) => (
              <option key={b.slug} value={b.name}>{b.name}</option>
            ))}
            <option value="Outra">Outra / Não sei</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
          Tipo de Equipamento
        </label>
        <select
          name="equipamento"
          value={formData.equipamento}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Selecione o tipo</option>
          {machineCategories.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
          Mensagem *
        </label>
        <textarea
          name="mensagem"
          required
          rows={4}
          value={formData.mensagem}
          onChange={handleChange}
          className={inputClass}
          placeholder="Descreva o problema, modelo da máquina, ou o que você precisa..."
        />
      </div>

      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full !py-4 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Enviar e Abrir no WhatsApp
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Ao enviar, você será redirecionado para o WhatsApp com a mensagem pré-formatada.
      </p>
    </form>
  );
}
