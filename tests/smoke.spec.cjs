/**
 * Smoke tests post-deploy — laboteca.es
 * 
 * Ejecutar tras cada deploy:
 *   npx playwright test tests/smoke.spec.js
 *
 * Verifica funcionalidades críticas que se han roto antes.
 */
const { test, expect } = require('@playwright/test');

const BASE = 'https://laboteca.es';

// --- FORMULARIO DE CONTACTO ---

test('formulario contacto: envía correctamente', async ({ page }) => {
  await page.goto(`${BASE}/contacto/`, { waitUntil: 'networkidle' });

  await page.fill('#name', 'Test Smoke');
  await page.fill('#email', 'smoke@test.dev');
  await page.selectOption('#servicio', 'no-se');
  await page.check('input[name="privacy"]');

  const [response] = await Promise.all([
    page.waitForNavigation({ timeout: 10000 }),
    page.click('button[type="submit"]')
  ]);

  expect(response.status()).toBe(200);
  expect(page.url()).toContain('/gracias/');
});

test('formulario contacto: campo Web acepta texto sin protocolo', async ({ page }) => {
  await page.goto(`${BASE}/contacto/`, { waitUntil: 'networkidle' });

  // Verificar que el campo web NO es type="url" (causa regresión móvil)
  const webType = await page.getAttribute('#web', 'type');
  expect(webType).not.toBe('url');

  await page.fill('#name', 'Test URL');
  await page.fill('#email', 'url@test.dev');
  await page.fill('#web', 'miempresa.es');  // Sin protocolo
  await page.selectOption('#servicio', 'chatbot-web');
  await page.check('input[name="privacy"]');

  const [response] = await Promise.all([
    page.waitForNavigation({ timeout: 10000 }),
    page.click('button[type="submit"]')
  ]);

  expect(response.status()).toBe(200);
  expect(page.url()).toContain('/gracias/');
});

// --- CHATWOOT LAUNCHER ---

test('chatwoot launcher: usa eventos SDK v4.11.1 (closed/opened)', async ({ page }) => {
  await page.goto(`${BASE}/contacto/`, { waitUntil: 'networkidle' });

  // Verificar que el código usa los nombres de evento correctos
  const usesNewEvents = await page.evaluate(() => {
    const scripts = document.querySelectorAll('script');
    for (const s of scripts) {
      if (s.textContent.includes("chatwoot:closed") && s.textContent.includes("chatwoot:opened")) {
        return true;
      }
    }
    return false;
  });
  expect(usesNewEvents).toBe(true);
});

test('chatwoot launcher: visible al cargar', async ({ page }) => {
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });

  const launcher = page.locator('#boteca-launcher');
  await expect(launcher).toBeVisible();
  await expect(launcher).not.toHaveClass(/is-hidden/);
});

test('chatwoot launcher: reaparece tras cerrar chat', async ({ page }) => {
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });

  // Esperar a que Chatwoot SDK cargue
  await page.waitForFunction(() => window.$chatwoot, { timeout: 15000 });

  // Abrir chat via launcher
  await page.click('#boteca-launcher');
  await page.waitForTimeout(1500);
  await expect(page.locator('#boteca-launcher')).toHaveClass(/is-hidden/);

  // Cerrar chat
  await page.evaluate(() => window.$chatwoot.toggle('close'));
  await page.waitForTimeout(2000);

  // Launcher debe reaparecer
  await expect(page.locator('#boteca-launcher')).not.toHaveClass(/is-hidden/);
});

// --- PÁGINAS CRÍTICAS ---

test('páginas principales cargan sin error', async ({ page }) => {
  const pages = ['/', '/servicios/', '/formulas/', '/contacto/', '/quienes-somos/', '/ia-responsable/'];
  for (const path of pages) {
    const response = await page.goto(`${BASE}${path}`);
    expect(response.status(), `${path} devuelve ${response.status()}`).toBe(200);
  }
});

test('ia-responsable: sin referencias a tecnologías concretas', async ({ page }) => {
  await page.goto(`${BASE}/ia-responsable/`, { waitUntil: 'networkidle' });
  const text = await page.textContent('main');
  // Estas referencias se eliminaron intencionalmente
  expect(text).not.toContain('Hetzner');
  expect(text).not.toContain('ChatGPT');
  expect(text).not.toContain('Gemini');
});
