import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('游客端工程契约', () => {
  it('包含 Nuxt 启动、构建和类型检查脚本', () => {
    const pkg = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'));
    expect(pkg.scripts.dev).toContain('nuxt');
    expect(pkg.scripts.build).toBe('nuxt build');
    expect(pkg.scripts.typecheck).toContain('nuxt typecheck');
  });

  it('使用 9100 端口并暴露 API 配置', () => {
    const config = readFileSync(resolve(process.cwd(), 'nuxt.config.ts'), 'utf8');
    expect(config).toContain('port: 9100');
    expect(config).toContain('apiBase');
  });
});
