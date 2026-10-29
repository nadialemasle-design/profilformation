-- =====================================================================
-- Mise à jour n°3 du 29/10/2026 : coût des certifications
-- Parcours IA et parcours réseaux sociaux : 330 € · Tosa : 89 € · ICDL : 120 €
-- À coller dans Supabase › SQL Editor › New query, puis « Run ». Le relancer ne casse rien.
-- =====================================================================
update public.formations set data = data || '{"tarifCertification":89}'::jsonb, updated_at = now()
  where id in ('bur-excel-power', 'bur-vba', 'col-workspace', 'col-notion', 'com-canva1', 'com-canva-pro', 'pao-photoshop-init', 'pao-photoshop-perf', 'pao-illustrator', 'pao-indesign', 'web-wordpress');
update public.formations set data = data || '{"tarifCertification":120}'::jsonb, updated_at = now()
  where id in ('cao-autocad', 'cao-sketchup', 'cao-solidworks');
update public.formations set data = data || '{"tarifCertification":330}'::jsonb, updated_at = now()
  where id in ('ia-admin', 'ia-form', 'ia-rh', 'ia-graphiste', 'ia-webmaster', 'rs-simple', 'rs-marque', 'rs-linkedin', 'rs-local', 'rs-video');

-- Vérification : doit afficher 24
select count(*) as formations_avec_cout_certification from public.formations where data ? 'tarifCertification';
