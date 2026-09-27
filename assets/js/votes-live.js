(() => {
  'use strict';

  const POLL = 'official-visual-01';
  const VOTER_KEY = 'quqn_vote_voter_v1';
  const CHOICE_KEY = 'quqn_vote_choice_v1';

  let state = {
    counts: [0, 0, 0],
    total: 0
  };

  const COPY = {
    en: {
      loading: 'Loading live results…',
      live: 'Live community poll. Votes are counted on the server. You can change your choice at any time.',
      saved: 'Vote recorded. You can change your choice at any time.',
      error: 'Voting is temporarily unavailable.'
    },
    fr: {
      loading: 'Chargement des résultats…',
      live: 'Sondage communautaire en direct. Les votes sont comptés sur le serveur. Tu peux changer ton choix à tout moment.',
      saved: 'Vote enregistré. Tu peux changer ton choix à tout moment.',
      error: 'Le vote est temporairement indisponible.'
    },
    zh: {
      loading: '正在加载实时结果…',
      live: '实时社区投票。投票在服务器端计数，你可以随时更改选择。',
      saved: '投票已记录，你可以随时更改选择。',
      error: '投票暂时不可用。'
    },
    ko: {
      loading: '실시간 결과 불러오는 중…',
      live: '실시간 커뮤니티 투표입니다. 투표는 서버에서 집계되며 언제든 선택을 변경할 수 있습니다.',
      saved: '투표가 저장되었습니다. 언제든 선택을 변경할 수 있습니다.',
      error: '투표를 일시적으로 사용할 수 없습니다.'
    },
    ja: {
      loading: 'リアルタイム結果を読み込み中…',
      live: 'リアルタイムのコミュニティ投票です。投票はサーバーで集計され、いつでも変更できます。',
      saved: '投票を記録しました。いつでも変更できます。',
      error: '投票は一時的に利用できません。'
    },
    pt: {
      loading: 'A carregar resultados…',
      live: 'Votação comunitária ao vivo. Os votos são contabilizados no servidor e podes mudar a escolha a qualquer momento.',
      saved: 'Voto registado. Podes mudar a escolha a qualquer momento.',
      error: 'A votação está temporariamente indisponível.'
    },
    es: {
      loading: 'Cargando resultados…',
      live: 'Encuesta comunitaria en directo. Los votos se cuentan en el servidor y puedes cambiar tu elección cuando quieras.',
      saved: 'Voto registrado. Puedes cambiar tu elección en cualquier momento.',
      error: 'La votación no está disponible temporalmente.'
    },
    ar: {
      loading: 'جارٍ تحميل النتائج…',
      live: 'تصويت مجتمعي مباشر. يتم احتساب الأصوات على الخادم ويمكنك تغيير اختيارك في أي وقت.',
      saved: 'تم تسجيل التصويت. يمكنك تغيير اختيارك في أي وقت.',
      error: 'التصويت غير متاح مؤقتًا.'
    },
    th: {
      loading: 'กำลังโหลดผลโหวต…',
      live: 'โหวตชุมชนแบบสด คะแนนถูกนับบนเซิร์ฟเวอร์ และคุณเปลี่ยนตัวเลือกได้ตลอดเวลา',
      saved: 'บันทึกโหวตแล้ว คุณเปลี่ยนตัวเลือกได้ตลอดเวลา',
      error: 'ระบบโหวตไม่พร้อมใช้งานชั่วคราว'
    },
    vi: {
      loading: 'Đang tải kết quả…',
      live: 'Bình chọn cộng đồng trực tiếp. Phiếu được tính trên máy chủ và bạn có thể đổi lựa chọn bất cứ lúc nào.',
      saved: 'Đã ghi nhận bình chọn. Bạn có thể đổi lựa chọn bất cứ lúc nào.',
      error: 'Bình chọn tạm thời không khả dụng.'
    },
    tr: {
      loading: 'Canlı sonuçlar yükleniyor…',
      live: 'Canlı topluluk oylaması. Oylar sunucuda sayılır ve seçimini istediğin zaman değiştirebilirsin.',
      saved: 'Oyun kaydedildi. Seçimini istediğin zaman değiştirebilirsin.',
      error: 'Oylama geçici olarak kullanılamıyor.'
    },
    id: {
      loading: 'Memuat hasil…',
      live: 'Polling komunitas live. Vote dihitung di server dan pilihan bisa diubah kapan saja.',
      saved: 'Vote tersimpan. Kamu bisa mengubah pilihan kapan saja.',
      error: 'Voting sementara tidak tersedia.'
    },
    hi: {
      loading: 'लाइव नतीजे लोड हो रहे हैं…',
      live: 'लाइव community poll। वोट server पर गिने जाते हैं और आप अपना विकल्प कभी भी बदल सकते हैं।',
      saved: 'वोट दर्ज हो गया। आप कभी भी अपना विकल्प बदल सकते हैं।',
      error: 'वोटिंग अभी अस्थायी रूप से उपलब्ध नहीं है।'
    }
  };

  function lang() {
    return (document.documentElement.lang || 'en')
      .toLowerCase()
      .split('-')[0];
  }

  function text(key) {
    const l = lang();
    return (COPY[l] || COPY.en)[key];
  }

  function apiBase() {
    return String(window.__QUQN_CONFIG__?.apiBase || '')
      .replace(/\/+$/, '');
  }

  function voterId() {
    let id = localStorage.getItem(VOTER_KEY);

    if (id && /^[A-Za-z0-9_-]{16,100}$/.test(id)) {
      return id;
    }

    id = (
      crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}_${Math.random().toString(36).slice(2)}`
    ).replace(/[^A-Za-z0-9_-]/g, '_');

    localStorage.setItem(VOTER_KEY, id);
    return id;
  }

  function choice() {
    const value = localStorage.getItem(CHOICE_KEY);
    return ['0', '1', '2'].includes(value) ? value : '';
  }

  function percentage(count, total) {
    return total > 0
      ? Math.round((count / total) * 100)
      : 0;
  }

  function paint(layer, message) {
    if (!layer) return;

    const selected = choice();
    const total = Number(state.total || 0);

    const totalEl = layer.querySelector('[data-vote-total]');
    if (totalEl) {
      totalEl.textContent = `${total} VOTE${total === 1 ? '' : 'S'}`;
    }

    layer.querySelectorAll('[data-vote]').forEach(button => {
      const option = Number(button.dataset.vote);
      const count = Number(state.counts?.[option] || 0);
      const percent = percentage(count, total);

      button.disabled = false;
      button.classList.toggle(
        'selected',
        selected === String(option)
      );

      const result = button.querySelector('[data-vote-result]');
      if (result) {
        result.textContent =
          `${percent}%${selected === String(option) ? ' · ✓' : ''}`;
      }

      const bar = button.querySelector('[data-vote-bar]');
      if (bar) {
        bar.style.width = `${percent}%`;
      }
    });

    const note = layer.querySelector('.qfr-vote-note');
    if (note && message) {
      note.textContent = message;
    }
  }

  async function loadResults() {
    const base = apiBase();
    if (!base) throw new Error('Voting API unavailable');

    const response = await fetch(
      `${base}/api/votes?poll=${encodeURIComponent(POLL)}`,
      {
        headers: {
          Accept: 'application/json'
        },
        cache: 'no-store'
      }
    );

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || 'Voting API unavailable');
    }

    state = {
      counts: Array.isArray(payload.counts)
        ? payload.counts
        : [0, 0, 0],
      total: Number(payload.total || 0)
    };
  }

  async function sendVote(option) {
    const base = apiBase();
    if (!base) throw new Error('Voting API unavailable');

    const response = await fetch(`${base}/api/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        poll: POLL,
        option,
        voterId: voterId()
      })
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || 'Vote failed');
    }

    localStorage.setItem(CHOICE_KEY, String(option));

    state = {
      counts: Array.isArray(payload.counts)
        ? payload.counts
        : [0, 0, 0],
      total: Number(payload.total || 0)
    };
  }

  async function hydrate(layer) {
    if (!layer) return;

    const note = layer.querySelector('.qfr-vote-note');
    if (note) note.textContent = text('loading');

    try {
      await loadResults();
      paint(layer, text('live'));
    } catch {
      paint(layer, text('error'));
    }
  }

  async function submit(option, layer) {
    if (!Number.isInteger(option) || option < 0 || option > 2) {
      return false;
    }

    layer?.querySelectorAll('[data-vote]')
      .forEach(button => {
        button.disabled = true;
      });

    const note = layer?.querySelector('.qfr-vote-note');
    if (note) note.textContent = text('loading');

    try {
      await sendVote(option);
      paint(layer, text('saved'));
      return true;
    } catch {
      paint(layer, text('error'));
      return false;
    }
  }

  window.QUQNVotes = {
    getChoice: choice,
    hydrate,
    submit
  };
})();
